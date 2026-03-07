import { Router } from "express";
import { getAllWorkouts, getSimpleAllWorkouts} from "../controllers/workoutsController.js";

const workoutRouter = Router();

workoutRouter.get('/', getAllWorkouts);

export default workoutRouter;