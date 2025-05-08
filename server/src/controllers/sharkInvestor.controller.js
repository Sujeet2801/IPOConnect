import { asyncHandler } from '../utils/async-handler.js'
import { ApiError } from '../utils/api-error.js'
import { ApiResponse } from '../utils/api-response.js'
import { db } from '../libs/db.js'

const createSharkInvestorController = asyncHandler(async (req, res) => {

        const { imageUrl, sharkName, description, netWorth, portfolio, sectorFocus, stageFocus, 
                notableInvestments, achievements, smLink } = req.body;
    
        if (!imageUrl || !sharkName || !description || !netWorth || !portfolio) {
        return res.status(400).json(new ApiError(400, 'Missing required fields'));
        }
    
        const existing = await db.sharkInvestor.findUnique({ where: { sharkName } });
        if (existing) {
            return res
                .status(409)
                .json(new ApiError(409, 'Shark investor with this name already exists'));
            }
    
        const newShark = await db.sharkInvestor.create({
        data: { imageUrl, sharkName, description, netWorth, portfolio, sectorFocus, stageFocus, 
                notableInvestments, achievements, smLink }
        });
    
        return res.status(201).json(new ApiResponse(201, newShark, 'Shark investor created successfully'));
});

const updateSharkInvestorController = asyncHandler(async (req, res) => {

    let { sharkNameFromParams } = req.params;
    sharkNameFromParams = sharkNameFromParams.replace(/-/g, " ")

    const { imageUrl, sharkName, description, netWorth, portfolio, sectorFocus, stageFocus,
            notableInvestments, achievements, smLink } = req.body;
    
    const existingInvestor = await db.sharkInvestor.findUnique({
        where: { sharkName: sharkNameFromParams },
    });
    
    if (!existingInvestor) {
        return res.status(404).json(new ApiError(404, 'Shark investor not found'));
    }
    
    const updatedInvestor = await db.sharkInvestor.update({
        where: { sharkName: sharkNameFromParams },
        data: {
        sharkName: sharkName || existingInvestor.sharkName,
        imageUrl: imageUrl || existingInvestor.imageUrl,
        description: description || existingInvestor.description,
        netWorth: netWorth || existingInvestor.netWorth,
        portfolio: portfolio || existingInvestor.portfolio,
        sectorFocus: sectorFocus || existingInvestor.sectorFocus,
        stageFocus: stageFocus || existingInvestor.stageFocus,
        notableInvestments: notableInvestments || existingInvestor.notableInvestments,
        achievements: achievements || existingInvestor.achievements,
        smLink: smLink || existingInvestor.smLink,
        },
    });

    return res
        .status(200)
        .json(new ApiResponse(200, updatedInvestor, 'Shark investor updated successfully'));
});

const deleteSharkInvestorController = asyncHandler(async (req, res) => {

    let { sharkName } = req.params;
    sharkName = sharkName.replace(/-/g, " ")

    const existingInvestor = await db.sharkInvestor.findUnique({ where: { sharkName } });
    if (!existingInvestor) {
        return res.status(404).json(new ApiError(404, 'Shark investor not found'));
    }

    await db.sharkInvestor.delete({
        where: { sharkName },
    });

    return res.status(200).json(new ApiResponse(200, [], 'Shark investor deleted successfully'));
});

const getAllSharkInvestorsController = asyncHandler(async (req, res) => {

    const sharkInvestors = await db.sharkInvestor.findMany();

    if (sharkInvestors.length === 0) {
        return res.status(404).json(new ApiError(404, 'No shark investors found'));
    }

    return res.status(200).json(new ApiResponse(200, sharkInvestors, 'Shark investors fetched successfully'));
});

const getSharkInvestorController = asyncHandler(async (req, res) => {
    let { sharkName } = req.params;
    sharkName = sharkName.replace(/-/g, " ")

    const sharkInvestor = await db.sharkInvestor.findUnique({ where: { sharkName } });
    if (!sharkInvestor) {
        return res.status(404).json(new ApiError(404, 'Shark investor not found'));
    }

    return res.status(200).json(new ApiResponse(200, sharkInvestor, 'Shark investor fetched successfully'));
});

export { 
    createSharkInvestorController,
    updateSharkInvestorController,
    deleteSharkInvestorController,
    getAllSharkInvestorsController,
    getSharkInvestorController
};
