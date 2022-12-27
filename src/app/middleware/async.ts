import { NextFunction, Request, Response } from "express";

const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.all(fn(req, res, next)).catch(next);
  };
export default asyncHandler;
