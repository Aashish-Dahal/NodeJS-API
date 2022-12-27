import admin from "firebase-admin";
admin.initializeApp({
  credential: admin.credential.cert(require("../../firebase-config.json")),
});
export default admin;
