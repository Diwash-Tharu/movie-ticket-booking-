import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/dg.js";

// Database connection
connectDB();

// Create Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Health Check
app.get("/", (req, res) => {
    res.send("Hello World! API is running");
});

// Start server
const startServer = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Server failed to start.", error);
        process.exit(1);
    }
};

startServer();