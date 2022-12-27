import { Router } from "express";
import userRoutes from "./userRoute";
const router = Router();

// GET v1/docs

router.use("/users", userRoutes);
