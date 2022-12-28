import admin, { auth, credential } from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { config } from "./config";

const initializeFirebaseApp = () =>
  admin.initializeApp({
    credential: credential.cert(require("../../firebase-config.json")),
  });
const firebaseAuth = getAuth(
  initializeApp({
    apiKey: config.apiKey,
  })
);
export const firebase = { initializeFirebaseApp, auth, admin, firebaseAuth };
