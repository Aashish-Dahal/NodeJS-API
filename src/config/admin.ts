import { getAuth } from "firebase-admin/auth";
import { initializeApp, cert } from "firebase-admin/app";
const { getFirestore } = require("firebase-admin/firestore");
const initializeFirebaseApp = initializeApp({
  credential: cert(require("../../firebase-config.json")),
});
const auth = getAuth(initializeFirebaseApp);
export const firebaseAdmin = { auth, initializeFirebaseApp, getFirestore };
