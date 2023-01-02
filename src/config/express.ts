import express from "express";
import cors from "cors";
import routes from "../app/routes/index";
import { firebaseAdmin } from "./admin";
import { errorHandler } from "../app/middleware/error";
import { protect } from "../app/middleware/auth";
const app = express();

// parse body params and attache them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

//Initialize firebase
firebaseAdmin.initializeApp();

// mount api v1 routes
app.use("/api/v1", routes);

//handle errors
app.use(errorHandler);
export default app;
