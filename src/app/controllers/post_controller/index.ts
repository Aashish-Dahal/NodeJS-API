import { asyncHandler } from "../../middleware/async";
import { NextFunction, Request, Response } from "express";
import { userPost } from "../../../config/db";

export const createPost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req["currentUser"];
    const { message } = req.body;
    const id = userPost.doc().id;
    await userPost.doc(id).set({
      id: id,
      message: message,
      user: user.user_id,
    });
    res.status(200).json({
      success: true,
      message: "post created successfully",
    });
  }
);
export const deletePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    await userPost.doc(req.params.id).delete();
    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  }
);
export const updatePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { message } = req.body;
    console.log(req.params.id);
    await userPost.doc(req.params.id).update({
      message: message,
    });
    res.status(200).json({
      success: true,
      message: "Updated successfully",
    });
  }
);
export const posts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let allPosts: any[] = [];
    const posts = await userPost.get();

    posts.forEach((doc: any) => {
      allPosts.push(doc.data());
    });
    res.status(200).json({
      success: true,
      data: allPosts,
    });
  }
);
export const userPosts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req["currentUser"];
    let allPosts: any[] = [];
    const posts = await userPost.where("user", "==", user.user_id).get();

    posts.forEach((doc: any) => {
      allPosts.push(doc.data());
    });
    res.status(200).json({
      success: true,
      data: allPosts,
    });
  }
);
