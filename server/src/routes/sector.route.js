import { Router } from "express";
import { createSectorController, 
    updateSectorController, 
    getAllSectorController,
    getSectorsByMarketCapTypeController, 
    deleteSectorController, 
    getSectorDeatail } 
    from "../controllers/sector.controller.js";

import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/authRole.middleware.js";
import { sectorValidationRules } from "../validators/sector.validate.js";
import { validate } from "../middlewares/validate.middleware.js";

const router = Router();

router
    .route("/sector")
    .post(isAuthenticated, authorizeRoles("ADMIN"), sectorValidationRules(), validate, createSectorController);

router
    .route("/sector/:sectorNameFromParams")
    .put(isAuthenticated, authorizeRoles("ADMIN"), updateSectorController);

router
    .route("/sector/:sectorName")
    .delete(isAuthenticated, authorizeRoles("ADMIN"), deleteSectorController);

router
    .route("/sectors")
    .get(getAllSectorController);

router
    .route("/sectors/:sectorName")
    .get( isAuthenticated, getSectorDeatail)

router
    .route("/sectors/marketcaps/:type")
    .get( isAuthenticated, getSectorsByMarketCapTypeController);

export default router;
