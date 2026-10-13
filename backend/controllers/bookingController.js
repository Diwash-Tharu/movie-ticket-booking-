import mongoose from "mongoose";
import Booking from "../models/bookingModels.js"
import Movie from "../models/movieModel.js"
import dotenv from "dotenv";
dotenv.config();

const CLIENT_URL = "";
const STRIPE_SECRET_KEY = "";
const STRIPE_API_VERSION = "2022-11-15";
const RECLINER_ROWS = new Set(["D", "E"]);
const BLOCKING_STATUSES = ["pending", "paid", "confirmed", "active", "upcoming"];