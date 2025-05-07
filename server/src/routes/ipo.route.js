import { Router } from 'express'
import {
    deleteIpoController,
    getAllIpoController,
    getIposByStatusController,
    registerIpoController,
    updateIpoController
}
    from '../controllers/ipo.controller.js'
import { isAuthenticated } from '../middlewares/auth.middleware.js'
import { authorizeRoles } from '../middlewares/authRole.middleware.js'
import { ipoValidationRules } from '../validators/ipo.validate.js'
import { validate } from '../middlewares/validate.middleware.js'

const router = Router()
1
router.route("/ipo/register")
    .post(isAuthenticated, authorizeRoles("ADMIN"), ipoValidationRules(), validate, registerIpoController)

router.route("/ipo/:companyName").put(isAuthenticated, authorizeRoles("ADMIN"), updateIpoController)

router.route("/ipo/:companyName").delete(isAuthenticated, authorizeRoles("ADMIN"), deleteIpoController)

router.route("/ipos").get(getAllIpoController)

router.route("/ipo/by-status").get(getIposByStatusController)

export default router