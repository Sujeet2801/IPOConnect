import { asyncHandler } from '../utils/async-handler.js'
import { ApiError } from '../utils/api-error.js'
import { ApiResponse } from '../utils/api-response.js'
import { db } from '../libs/db.js'

const createSectorController = asyncHandler( async (req, res) => {

    const { sectorName, sectorDesc, marketCaps, marketInsights, opportunities } = req.body;

    if (!sectorName || !sectorDesc) {
        return res.status(400).json(new ApiError(400, "Sector name and description are required"));
    }

    if (!marketCaps || (!marketCaps.large && !marketCaps.mid && !marketCaps.small)) {
        return res.status(400).json(new ApiError(400, "marketCaps must include at least one of: large, mid, or small"));
    }

    const existingSector = await db.sector.findUnique({ where: { sectorName } });

    if (existingSector) {
        return res.status(409).json(new ApiError(409, "Sector already exists"));
    }

    const newSectorData = await db.sector.create({
        data: {
            sectorName,
            sectorDesc,
            marketCaps,
            marketInsights,
            opportunities,
        },
    });

    return res.status(201).json(new ApiResponse(201, newSectorData, "Sector created successfully"));
})

const updateSectorController = asyncHandler( async (req, res) => {

    let {sectorNameFromParams} = req.params
    sectorNameFromParams = sectorNameFromParams.replace(/-/g, " ")

    const { sectorName, sectorDesc, marketCaps, marketInsights, opportunities } = req.body;

    const existingSector = await db.sector.findUnique({ where: { sectorName: sectorNameFromParams } });
    if (!existingSector) {
        return res.status(404).json(new ApiError(404, "Sector not found"));
    }

    const updatedSector = await db.sector.update({
        where: { sectorName: sectorNameFromParams },
        data: {
            sectorName: sectorName || existingSector.sectorName,
            sectorDesc: sectorDesc || existingSector.sectorDesc,
            marketCaps: marketCaps || existingSector.marketCap,
            marketInsights: marketInsights || existingSector.marketInsights,
            opportunities: opportunities || existingSector.opportunities,
        },
    });

    return res.status(200).json(new ApiResponse(200, updatedSector, "Sector updated successfully"));
})

const getAllSectorController = asyncHandler( async (req, res) => {

    const existingSector = await db.sector.findMany({ orderBy: { sectorName: "asc"}})
    return res.status(201).json(new ApiResponse(201, {existingSector}, "All sector fetched successfully"))
})

const getSectorsByMarketCapTypeController = asyncHandler( async (req, res) => {

    const { type } = req.params;
    console.log(type);
    
    const allowedTypes = ['large', 'mid', 'small'];

    if (!allowedTypes.includes(type)) {
        return res.status(400).json(new ApiError(400, "Invalid marketCap type. Must be 'large', 'mid', or 'small'."));
    }

        const sectors = await db.sector.findMany({
            select: {
                id: true,
                sectorName: true,
                sectorDesc: true,
                marketCaps: true
            }
        });

        const filteredData = sectors.map(sector => ({
            id: sector.id,
            sectorName: sector.sectorName,
            sectorDesc: sector.sectorDesc,
            marketCap: sector.marketCaps?.[type] || null
        })).filter(sector => sector.marketCap);

        return res.status(200)
        .json(new ApiResponse(200, { filteredData }, `Sectors with ${type} market cap data fetched successfully`));
});

const getSectorDeatail = asyncHandler( async (req, res) => {

    const { sectorName } = req.params;
    if(sectorName === undefined){
        throw new ApiError(400, "Sector name should not be undefined")
    }

    const existingSector = await db.sector.findUnique({ where: { sectorName }});
    if(!existingSector){
        throw new ApiError(404, "Sector not found");
    }

    return res.status(200).json(new ApiResponse(200, existingSector, "Specific sector detail fetched"))
})

const deleteSectorController = asyncHandler(async (req, res) => {

    let { sectorName } = req.params;
    sectorName = sectorName.replace(/-/g, " ")

    const existingSector = await db.sector.findUnique({ where: { sectorName } });
    if (!existingSector) {
        return res.status(404).json(new ApiError(404, "Sector not found"));
    }

    await db.sector.delete({ where: { sectorName } });

    return res.status(200).json(new ApiResponse(200, {}, "Sector deleted successfully"));
});

export {
    createSectorController,
    updateSectorController,
    getAllSectorController,
    getSectorsByMarketCapTypeController,
    getSectorDeatail,
    deleteSectorController
}