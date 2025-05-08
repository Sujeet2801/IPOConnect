import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { db } from "../libs/db.js";

// Create Broker
const createBrokerController = asyncHandler(async (req, res) => {

    const {
        companyName, companyLogo, ratings, reviews, accounts, openAccLink, learnMore, tradingCategory,
        accOpenCharge, maintainanceCharge, deliveryCharge, intradayBrokerage
    } = req.body;
    
    if (
        !companyName || !companyLogo || !ratings || !reviews || !accounts || !openAccLink ||
        !learnMore || !tradingCategory || !accOpenCharge || !maintainanceCharge || !deliveryCharge ||
        !intradayBrokerage
    ) {
        return res.status(400).json(new ApiError(400, "All fields are required"));
    }

    const existingBroker = await db.broker.findUnique({ where: { companyName } });
    if (existingBroker) {
        return res.status(400).json(new ApiError(400, "Broker already exists"));
    }

    const newBroker = await db.broker.create({
        data: {
        companyName,
        companyLogo,
        ratings: parseFloat(ratings),
        reviews: parseFloat(reviews),
        accounts,
        openAccLink,
        learnMore,
        tradingCategory,
        accOpenCharge,
        maintainanceCharge,
        deliveryCharge,
        intradayBrokerage
        }
    });

    return res
        .status(201)
        .json(new ApiResponse(201, { newBroker }, "Broker created successfully"));
});

// Update Broker
const updateBrokerController = asyncHandler(async (req, res) => {
    let { companyNameParam } = req.params;
    companyNameParam = companyNameParam.replace(/-/g, " ");

    const {
        companyName, companyLogo,  ratings, reviews, accounts, openAccLink, learnMore,
        tradingCategory, accOpenCharge, maintainanceCharge, deliveryCharge, intradayBrokerage
    } = req.body;

    const existingBroker = await db.broker.findUnique({ where: { companyName: companyNameParam } });
    if (!existingBroker) {
        return res.status(404).json(new ApiError(404, "Broker not found"));
    }

    const updatedBroker = await db.broker.update({
        where: { companyName: companyNameParam },
        data: {
        companyName: companyName || existingBroker.companyName,
        companyLogo: companyLogo || existingBroker.companyLogo,
        ratings: ratings ? parseFloat(ratings) : existingBroker.ratings,
        reviews: reviews ? parseFloat(reviews) : existingBroker.reviews,
        accounts: accounts || existingBroker.accounts,
        openAccLink: openAccLink || existingBroker.openAccLink,
        learnMore: learnMore || existingBroker.learnMore,
        tradingCategory: tradingCategory || existingBroker.tradingCategory,
        accOpenCharge: accOpenCharge || existingBroker.accOpenCharge,
        maintainanceCharge: maintainanceCharge || existingBroker.maintainanceCharge,
        deliveryCharge: deliveryCharge || existingBroker.deliveryCharge,
        intradayBrokerage: intradayBrokerage || existingBroker.intradayBrokerage
        }
    });

  return res
    .status(200)
    .json(new ApiResponse(200, { updatedBroker }, "Broker updated successfully"));
});

// Delete Broker
const deleteBrokerController = asyncHandler(async (req, res) => {
    let { companyName } = req.params;
    companyName = companyName.replace(/-/g, " ");

    const existingBroker = await db.broker.findUnique({ where: { companyName } });
    if (!existingBroker) {
        return res.status(404).json(new ApiError(404, "Broker not found"));
    }

    await db.broker.delete({ where: { companyName } });

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Broker deleted successfully"));
});

// Get All Brokers
const getAllBrokerController = asyncHandler(async (req, res) => {

    const allBrokers = await db.broker.findMany({
        orderBy: { companyName: "asc" }
    });

    return res
        .status(200)
        .json(new ApiResponse(200, { allBrokers }, "Broker data fetched"));
});

export {
    createBrokerController,
    updateBrokerController,
    deleteBrokerController,
    getAllBrokerController
};
