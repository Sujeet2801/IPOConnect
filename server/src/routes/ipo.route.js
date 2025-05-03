import { Router } from 'express'
import { deleteIpoController, getAllIpoController, getIposByStatusController, registerIpoController, updateIpoController } from '../controllers/ipo.controller.js'

const router = Router()

router.route("/ipo/register").post(registerIpoController)
router.route("/ipo/:companyName").put(updateIpoController)
router.route("/ipos").get(getAllIpoController)
router.route("/ipo/by-status").get(getIposByStatusController)
router.route("/ipo/:companyName").delete(deleteIpoController)

export default router