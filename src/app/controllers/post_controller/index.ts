import { asyncHandler } from "../../middleware/async";
import { NextFunction, Request, Response } from "express";

export const createPost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
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
