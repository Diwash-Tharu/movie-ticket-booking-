// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// // import dns from 'node:dns'
// import  connectDB  from './config/dg.js'

// const app = express();
// const port = 5000;
// // dns.setServers(['8.8.8.8', '1.1.1.1']);

// //  MiddleWare
// app.use(cors());
// app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// // Database connection
// connectDB();


// // Routes
// //  thees is the requrst and response for the api 

// app.get('/', (req, res) => {
//     res.send('Hello World! api is running');
// });



// // setting the on define port running cod e

// app.listen(port, () => {
//     console.log(`Server is running on port http://localhost:${port}`);
// });



import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/dg.js";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.send("Hello World! API is running");
});

// Start server
const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Server failed to start.");
        process.exit(1);
    }
};

startServer();
