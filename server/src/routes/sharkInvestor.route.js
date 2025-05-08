import { Router } from 'express';
import { createSharkInvestorController,updateSharkInvestorController,  getAllSharkInvestorsController,
        getSharkInvestorController, deleteSharkInvestorController } 
        from '../controllers/sharkInvestor.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js'
import { authorizeRoles } from '../middlewares/authRole.middleware.js'
import { validate } from '../middlewares/validate.middleware.js'
import { sharkInvestorValidationRules } from '../validators/sharkInvestor.validate.js';

const router = Router();

router.route('/shark-investors')
        .post( isAuthenticated, authorizeRoles("ADMIN"), sharkInvestorValidationRules(), validate,
                createSharkInvestorController);

router.route('/shark-investors/:sharkNameFromParams')
        .put(isAuthenticated, authorizeRoles("ADMIN"), updateSharkInvestorController);

router.route('/shark-investors/:sharkName')
        .delete(isAuthenticated, authorizeRoles("ADMIN"), deleteSharkInvestorController);

router.route('/shark-investors').get(getAllSharkInvestorsController);

router.route('/shark-investors/:sharkName').get(getSharkInvestorController);

export default router;