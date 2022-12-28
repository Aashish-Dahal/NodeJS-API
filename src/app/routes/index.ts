import { Router } from "express";
import userRoutes from "./user_route";
const router = Router();

// GET v1/docs

router.use("/users", userRoutes);
export default router;
