import mongoose from "mongoose";

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    
    // User name (required)
    name: { type: String, required: true },

    // User email address (required and must be unique)
    email: { type: String, required: true, unique: true },

    // Object to store user cart items (default is an empty object)
    cartItems: { type: Object, default: {} },

    // User password (required)
    password: { type: String, required: true},

    lastlogin: { type: Data, default: Date.now},

    isVerified: {type: Boolean, default:false},

    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationTokenExpiresAt: Date,
},{
    timestamps:true
});

// Create the User model only if it doesn't already exist (avoids model overwrite issues in development)
const User = mongoose.models.user || mongoose.model("user", userSchema);

// Export the User model for use in other parts of the application
export default User;