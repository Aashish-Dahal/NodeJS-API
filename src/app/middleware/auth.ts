import { NextFunction, Request, Response } from "express";
import { firebaseAdmin } from "../../config/admin";
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
      const decodedToken = await firebaseAdmin
        .auth()
        .verifyIdToken(headerToken);
      req["currentUser"] = decodedToken;

      next();
    } catch (err) {
      return next(new ErrorResponse(401, "Not authorize to access this route"));
    }
  }
);
