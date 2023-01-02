import { firebaseAdmin } from "./admin";

const db = firebaseAdmin.getFirestore();
export const userPost = db.collection("userPosts");
