// import mongoose from "mongoose";

// const connectDB = async () => {

//     await mongoose.connect("mongodb+srv://chaudharymama20_db_user:oxiGzs2KNaQLdR1o@cluster0.guodhz2.mongodb.net/?appName=Cluster0")
//     // mongodb+srv://chaudharymama20_db_user:<db_password>@cluster0.9qo3glk.mongodb.net/?appName=Cluster0

//     .then(() =>console.log("MongoDB connected successfully"));
    
// }
// export default connectDB;





// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);

//         console.log("MongoDB connected successfully");
//     } catch (error) {
//         console.error("MongoDB connection failed:");
//         console.error(error.message);
//         throw error;
//     }
// };

// export default connectDB;


// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const dbconnection=await mongoose.connect(process.env.DATABASE_URL);
        console.log("MongoDB connected successfully", dbconnection.connection.host);

    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }

//      try {
//     await mongoose.connect("mongodb+srv://chaudharymama20_db_user:oxiGzs2KNaQLdR1o@cluster0.guodhz2.mongodb.net/?appName=Cluster0");
//     console.log("You successfully connected to MongoDB!");
//     return mongoose;
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//     console.dir(err);
//   }

};
    
export default connectDB;


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


