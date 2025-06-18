import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js"
dotenv.config();

import cors from "cors";

//configure env

//databse config
connectDB();

//rest object
const app = express();

//middelwares
// app.use(cors({
//   origin: "https://lost-and-found-frontend-zn9e.onrender.com", 
//   credentials: true,
//   optionsSuccessStatus: 200,
// }));
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to found&lost app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
