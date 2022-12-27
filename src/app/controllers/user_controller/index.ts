import { NextFunction, Request, Response } from "express";
import admin from "firebase-admin";
import asyncHandler from "../../middleware/async";

exports.login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, phone, password, fullName } = req.body;
    const userRes = await admin.auth().createUser({
      displayName: fullName,
      email: email,
      emailVerified: false,
      phoneNumber: phone,
      password: password,
      disabled: true,
    });
    res.status(201).send({
      success: true,
      user: userRes,
    });
  }
);
