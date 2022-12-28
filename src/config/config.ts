import path from "path";
import dotenv from "dotenv";

// import .env variables
dotenv.config({
  path: path.join(__dirname, "../../.env"),
});

export const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  apiKey: process.env.API_KEY,
};
