import User from "../models/User.js";
export const getAllUsers = async (req, res) => {
    const users = await User.getAll();
    res.json(users);
}
export const getUserById = async (req, res) => {
    const user = await User.getById();
    res.json(user);
}