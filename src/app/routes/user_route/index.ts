import { Router } from "express";
import { register, login, getUser } from "../../controllers/user_controller";
import { protect } from "../../middleware/auth";

const router = Router();
router.post("/register", register);
router.post("/login", login);
router.get("/user", protect, getUser);
export default router;
