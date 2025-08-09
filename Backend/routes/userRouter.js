// Import required modules
import express from "express"; // Import Express framework
import { Register,login,logout } from "../controllers/userController.js"; // Controller function

// Create a new Express Router instance
const userRouter = express.Router();

// Register a new user
// POST /api/user/register
userRouter.post("/register", Register);

// Login a user
// POST /api/user/login
userRouter.post("/login", login);

// Logout user (protected route)
// GET /api/user/logout
userRouter.get("/logout",logout);

// Export the router to use in the main server file
export default userRouter;