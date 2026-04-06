import { Router } from "express";
import { getAllUsers, getUserById, loginUser, createUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/login', loginUser);
userRouter.post('/register', createUser);

export default userRouter;