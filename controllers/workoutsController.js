import Workout from "../models/Workout.js";
import AppError from "../utils/AppError.js";

export const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.getAll();
        res.json(workouts);
    } catch (err) {
        // Use rethrowing, so catch only handles known errors
        if (err instanceof AppError) {
            res.status(err.code || 400).send(err.message);
        } else {
            next(err);
        }
    }
}
export const getSimpleAllWorkouts = async (req, res) => {
    const workouts = await Workout.simpleGetAll();
    res.json(workouts);
}