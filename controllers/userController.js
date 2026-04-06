import User from "../models/User.js";
// Extract data from a request, interact with database via a model, send response to client
export const getAllUsers = async (req, res) => {
    const users = await User.getAll();
    res.json(users);
}
export const getUserById = async (req, res) => {
    const user = await User.getById();
    res.json(user);
}
export const loginUser = async (req, res) => {
    const {email, password} = req.body
}
export const createUser = async (req, res) => {
    // hint: passing indivual parameters you are required to remember the order, use object key-value pairs, protects from positional errors
    try {
        const {full_name, username, email, password_unhash} = req.body;
        const password_hash = password_unhash + "hash";
        console.log(password_hash)
        const user = await User.setUser({full_name, email, username, password_hash});
        res.status(201).json({
            status: 'success',
            data: user
        })
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }

}