import { Router } from "express"
import { changeAvatar, changePassword, getCurrentUser, loginUser, logoutUser, registerUser, renewAccessToken, updateAccountDetails, updateAvatar } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js"

const userRouter = Router();

//===================== AUTH ROUTES ==================
userRouter.route("/register").post(registerUser)

userRouter.route("/login").post(loginUser)


//=============== SECURED ROUTES ===================
userRouter.route("/logout").post(verifyJwt, logoutUser)

userRouter.route("/refresh-token").post(renewAccessToken)

userRouter.route("/change-password").post(verifyJwt, changePassword)

userRouter.route("/current-user").get(verifyJwt, getCurrentUser)

userRouter.route("/update-account").patch(verifyJwt, updateAccountDetails)

userRouter.route("/update-avatar").patch(
    verifyJwt,
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
    ]),
    updateAvatar
)

userRouter.route("/change-avatar").patch(
    verifyJwt,
    upload.single('avatar'),
    changeAvatar
)

export default userRouter