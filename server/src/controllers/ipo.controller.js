import { asyncHandler } from "../utils/async-handler.js"
import { ApiError } from '../utils/api-error.js'
import { ApiResponse } from "../utils/api-response.js"
import { db } from "../libs/db.js"

const registerIpoController = asyncHandler (async (req, res) => {

    const { companyName, priceBand, openDate, closeDate, issueSize, issueType, listingDate, status} = req.body
    if ( !companyName || !priceBand || !openDate || !closeDate || !issueSize || !issueType || 
        !listingDate ||   !status){
            return res.status(400).json(new ApiError(400, "All field are required"))
    }

    const existingIpo = await db.ipo.findUnique({ where: {companyName} })
    if(existingIpo){
        return res.status(409).json(new ApiError(409, "IPO already exists"))
    }

    const newIpo = await db.ipo.create({
        data: {
            companyName,
            openDate,
            closeDate,
            priceBand,
            issueSize,
            issueType,
            listingDate,
            status: status || ""
        }
    })

    return res.status(201).json(new ApiResponse(201, { newIpo }, `${status} IPO registered successfully`))
})

const updateIpoController = asyncHandler (async (req, res) => {

    let { companyName } = req.params;
    companyName = companyName.replace(/-/g, " ");

    const { priceBand, openDate, closeDate, issueSize, issueType, listingDate, status } = req.body;

    const existingIpo = await db.ipo.findUnique({ where: {companyName}})
    if (!existingIpo) {
        return res.status(404).json(new ApiError(404, `${status} IPO not found`));
    }

    const newIpo = await db.ipo.update({
        where: { companyName },
        data: {
            priceBand: priceBand || existingIpo.priceBand,
            openDate: openDate || existingIpo.openDate,
            closeDate: closeDate || existingIpo.closeDate,
            issueSize: issueSize || existingIpo.issueSize,
            issueType: issueType || existingIpo.issueType,
            listingDate: listingDate || existingIpo.listingDate,
            status: status || existingIpo.status
        }
    })

    return res.status(200).json(new ApiResponse(200, { newIpo }, "IPO Updated successfully"))
})

const deleteIpoController = asyncHandler (async (req, res) => {

    let { companyName } = req.params
    companyName = companyName.replace(/-/g, " ");
    
    if (!companyName) {
        return res.status(400).json(new ApiError(400, "company name is required"));
    }

    const existingIpo = await db.ipo.findUnique({ where: {companyName}})
    if (!existingIpo) {
        return res.status(404).json(new ApiError(404, "Ongoing IPO not found"));
    }

    await db.ipo.delete({ where: {companyName}})

    return res.status(200).json(new ApiResponse(200, {}, "IPO deleted successfully"))
}) 

const getAllIpoController = asyncHandler (async (req, res) => {
    const existingIpo =  await db.ipo.findMany({ orderBy: { openDate: "asc"} })
    return res.status(200).json(new ApiResponse(200, {existingIpo}, "All IPOs fetched successfully"))
})

const getIposByStatusController = asyncHandler(async (req, res) => {

    const { status } = req.query;
    console.log(status);

    // Validate input
    const validStatuses = ['UPCOMING', 'ONGOING', 'LISTED'];
    if (!status || !validStatuses.includes(status.toUpperCase())) {
        return res.status(400).json(new ApiResponse(400, null, "Invalid or missing 'status' query parameter. Valid values: UPCOMING, ONGOING, LISTED."));
    }

    const ipos = await db.ipo.findMany({
        where: {
            status: status.toUpperCase()
        },
        orderBy: {
            openDate: 'asc'
        }
    });

    return res.status(200).json(
        new ApiResponse(200, { ipos }, `IPOs with status '${status.toUpperCase()}' fetched successfully`)
    );
});

export {
    registerIpoController,
    updateIpoController,
    deleteIpoController,
    getAllIpoController,
    getIposByStatusController
}
