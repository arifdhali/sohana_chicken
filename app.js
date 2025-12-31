import express from "express";
const app = express();
import cors from "cors";

import "./models/index.js";

import sequelize from "./config/Db.js";


await sequelize.authenticate();

await sequelize.sync({ alter: true, force: true });

console.log("Database connected successfully.");


app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://farms-client.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],

}));

app.use(express.json());
// app.use("/api/auth");

export default app;