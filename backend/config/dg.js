import mongoose from "mongoose";

const connectDB = async () => {
    try {
       const dbConnection = await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected successfully", dbConnection.connection.host);
    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error.message);
        throw error;
    }
};

export default connectDB;
