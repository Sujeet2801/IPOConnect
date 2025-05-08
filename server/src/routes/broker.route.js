import { Router } from 'express';
import { createBrokerController, updateBrokerController, deleteBrokerController, getAllBrokerController } from '../controllers/broker.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/authRole.middleware.js';
import { brokerValidationRules } from '../validators/broker.validate.js';
import { validate } from '../middlewares/validate.middleware.js'

const router = Router();

router.route("/broker")
    .post(isAuthenticated, authorizeRoles("ADMIN"), brokerValidationRules(), validate, createBrokerController);

router.route("/broker/:companyNameParam")
    .put(isAuthenticated, authorizeRoles("ADMIN"), updateBrokerController);

router.route("/broker/:companyName")
    .delete(isAuthenticated, authorizeRoles("ADMIN"), deleteBrokerController);

router.route("/brokers").get(getAllBrokerController);

export default router;
