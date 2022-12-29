import admin, { auth, credential } from "firebase-admin";
const initializeApp = () =>
  admin.initializeApp({
    credential: credential.cert(require("../../firebase-config.json")),
  });
// const db = admin.firestore();
export const firebaseAdmin = { auth, initializeApp };
