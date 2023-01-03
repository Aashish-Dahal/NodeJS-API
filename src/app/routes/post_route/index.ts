import { Router } from "express";
import {
  createPost,
  deletePost,
  posts,
  updatePost,
  userPosts,
} from "../../controllers/post_controller";
import { protect } from "../../middleware/auth";
const router = Router();

router.post("/create", protect, createPost);
router.get("/posts", protect, posts);
router.get("/user", protect, userPosts);
router.put("/update/:id", protect, updatePost);
router.delete("/delete/:id", protect, deletePost);

export default router;
