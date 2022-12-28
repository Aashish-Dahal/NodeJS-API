import { NextFunction, Request, Response } from "express";
import { firebase } from "../../config/firebase";
import { asyncHandler } from "./async";
import { ErrorResponse } from "./error";
export const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let headerToken;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      headerToken = req.headers.authorization.split(" ")[1];
    }
    if (!headerToken) {
      return next(new ErrorResponse(401, "Not authorize to access this route"));
    }
    try {
      firebase.auth().verifyIdToken(headerToken);
      next();
    } catch (err) {
      return next(new ErrorResponse(401, "Not authorize to access this route"));
    }
  }
);
