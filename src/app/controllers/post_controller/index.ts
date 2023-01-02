import { asyncHandler } from "../../middleware/async";
import { NextFunction, Request, Response } from "express";
import { userPost } from "../../../config/db";

export const createPost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req["currentUser"];
    const { message } = req.body;
    await userPost.doc(user.user_id).set({
      message: message,
    });
    res.status(200).json({
      success: true,
      user: "post created successfully",
    });
  }
);
export const deletePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);
export const editPost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);
export const posts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req["currentUser"];
    const posts = await userPost.doc(user.user_id).get();

    res.status(200).json({
      success: true,
      post: posts.data(),
    });
  }
);
