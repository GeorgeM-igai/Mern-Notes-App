import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)

        console.log("DB connected successfully");
    } catch (error) {
        console.error("Error connecting to DB: ", error)
    }
}

export default connectDB;