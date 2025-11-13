import express from "express";
import sequelize from "./config/db.js";

const app = express();

app.use(express.json());

sequelize
  .sync()
  .then(() => console.log("Database synchronized."))
  .catch((error) => console.error("Synchronization error:", error));

export default app;
