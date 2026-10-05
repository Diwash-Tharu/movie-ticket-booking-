// import mongoose from "mongoose";

// const connectDB = async () => {

//     await mongoose.connect("mongodb+srv://chaudharymama20_db_user:MovieBook123@cluster0.9qo3glk.mongodb.net/MovieBook")

//     .then(() =>console.log("MongoDB connected successfully"));
    
// }
// export default connectDB;





import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error.message);
        throw error;
    }
};

export default connectDB;


// export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log("MongoDB connected successfully");
//     } catch (error) {
//         console.error("MongoDB connection failed:", error.message);
//         throw error;
//     }
// };

// export default connectDB;


// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;


