import { Router } from 'express'
import { loginUserController, logoutUserController, registerUserController, verifyEmailController, resendVerificationEmailController, forgotPasswordRequestController, changePasswordController, getCurrentUser } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { userLoginValidator, userRegistrationValidator } from '../validate/auth.validate.js';
import { validate } from '../middlewares/validate.middleware.js';

const router = Router()

router.route("/register").post( userRegistrationValidator(), validate, registerUserController)
router.route("/verify/:token").get(verifyEmailController)
router.route("/login").post( userLoginValidator(), validate, loginUserController)
router.route("/logout").get( isAuthenticated, logoutUserController)
router.route("/me").get( isAuthenticated, getCurrentUser)

router.route("/resendverifyemail").post(resendVerificationEmailController)
router.route("/passwordresetrequest").post(forgotPasswordRequestController)
router.route("/reset-password/:token").post(changePasswordController)

export default router;