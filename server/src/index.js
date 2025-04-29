import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// All routes imports
import healthCheckRoutes from './routes/healthCheck.route.js'

dotenv.config({
    path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.BASE_URL,
    })
);

// All Routes
app.use("/api/v1/users", healthCheckRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
