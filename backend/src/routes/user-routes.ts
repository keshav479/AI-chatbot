import { Router } from "express";
import { getAllUsers, userLogin, userLogout, userSignup, verifyUser } from "../controllers/user-controllers.js";
import { validate, signupValidator, loginValidator} from "../utils/validators.js";
import { verifytoken } from "../utils/token-manager.js";


const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifytoken ,verifyUser);
userRoutes.get("/logout", verifytoken ,userLogout);

export default userRoutes;