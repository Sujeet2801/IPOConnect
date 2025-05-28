import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// All routes imports
import healthCheckRoutes from './routes/healthCheck.route.js';
import userRoutes from './routes/user.route.js';
import ipoRoutes from './routes/ipo.route.js';
import blogRoutes from './routes/blog.route.js';
import sectorRoutes from './routes/sector.route.js';
import sharkInvestorRoutes from './routes/sharkInvestor.route.js';
import brokerRoutes from './routes/broker.route.js';

dotenv.config({
    path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 3000;

// Allowed origins from .env (comma-separated)
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
  : [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Enable CORS with multiple allowed origins
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Allow requests like Postman
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// All Routes
app.use("/api/v1/users", healthCheckRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/users", ipoRoutes);
app.use("/api/v1/users", blogRoutes);
app.use("/api/v1/users", sectorRoutes);
app.use("/api/v1/users", sharkInvestorRoutes);
app.use("/api/v1/users", brokerRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
