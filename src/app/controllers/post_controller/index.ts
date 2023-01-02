import { asyncHandler } from "../../middleware/async";
import { NextFunction, Request, Response } from "express";
import { firestore } from "firebase-admin";

export const createPost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req["currentUser"];
  }
);
export const deletePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);
export const editPost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);
export const posts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);
