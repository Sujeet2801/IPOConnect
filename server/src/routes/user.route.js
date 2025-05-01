import { Router } from 'express'
import { registerUserController, verifyEmailController } from '../controllers/user.controller.js';

const router = Router()

router.route("/register").post(registerUserController)
router.route("/verify/:token").get(verifyEmailController)

export default router;