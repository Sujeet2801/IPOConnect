import { Router } from 'express'
import { loginUserController, logoutUserController, registerUserController, verifyEmailController} from '../controllers/user.controller.js';

const router = Router()

router.route("/register").post(registerUserController)
router.route("/verify/:token").get(verifyEmailController)
router.route("/login").post(loginUserController)
router.route("/logout").post(logoutUserController)

export default router;