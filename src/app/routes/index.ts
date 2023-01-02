import { Router } from "express";
import userRoutes from "./user_route";
import postRoutes from "./post_route";
const router = Router();

// GET v1/docs

router.use("/users", userRoutes);
router.use("/post", postRoutes);
export default router;
