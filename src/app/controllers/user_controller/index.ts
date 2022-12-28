import { NextFunction, Request, Response } from "express";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "../../../config/firebase";
import { asyncHandler } from "../../middleware/async";

export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, phone, password, fullName } = req.body;
    const user = await firebase.auth().createUser({
      displayName: fullName,
      email: email,
      emailVerified: false,
      phoneNumber: phone,
      password: password,
      disabled: true,
    });

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user: user.providerData[0],
    });
  }
);
export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const user = await signInWithEmailAndPassword(
      firebase.firebaseAuth,
      email,
      password
    );
    const accessToken = await user.user.getIdToken(true);
    res.status(200).json({
      success: true,
      message: "Logged in Successfully",
      user: user.user.providerData[0],
      accessToken: accessToken,
      refreshToken: user.user.refreshToken,
    });
  }
);
export const getUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(201).json({
      success: true,
      message: "user",
    });
  }
);
