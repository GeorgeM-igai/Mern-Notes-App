import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoute from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// MIDDLEWARES
app.use(cors())
app.use(express.json());
app.use("/api/notes", notesRoute)

const PORT = process.env.PORT || 6267;


connectDB();
app.listen(PORT, () => {
    console.log("server started on port ", PORT);
})