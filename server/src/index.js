import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// All routes imports
import healthCheckRoutes from './routes/healthCheck.route.js'
import userRoutes from './routes/user.route.js'
import ipoRoutes from './routes/ipo.route.js'
import blogRoutes from './routes/blog.route.js'
import sectorRoutes from './routes/sector.route.js'

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
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/users", ipoRoutes)
app.use("/api/v1/users", blogRoutes)
app.use("/api/v1/users", sectorRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
