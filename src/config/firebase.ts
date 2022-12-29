import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { config } from "./config";

const app = initializeApp({
  apiKey: config.apiKey,
});
export const auth = getAuth(app);
