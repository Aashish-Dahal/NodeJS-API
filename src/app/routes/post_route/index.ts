import { Router } from "express";
import { createPost, posts } from "../../controllers/post_controller";
import { protect } from "../../middleware/auth";
const router = Router();
router.post("/create", protect, createPost);
router.get("/get", protect, posts);
export default router;
