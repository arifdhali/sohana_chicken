import express from "express";
const app = express();
import cors from "cors";
import "./models/index.js";
import sequelize from "./config/Db.js";
import authRoutes from "./routes/Auth.route.js";

app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://farms-client.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


await sequelize.authenticate().then(() => {
    console.log("Database connected successfully.");
}).catch((err) => {
    console.log("Unable to connect to the database:", err);
    process.exit(1);
});
// await sequelize.sync({ alter: true, force: true });


app.use("/api/auth", authRoutes);

export default app;