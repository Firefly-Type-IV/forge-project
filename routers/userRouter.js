import { Router } from "express";
import { getAllUsers } from "../controllers/userController.js";
import { getUserById } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);

export default userRouter;