import express from "express";
import { initateApp } from "./src/utilis/initateApp.js";
import { config } from "dotenv";

config({ path: "./config/.env" });
const app = express();

// initateApp(app, express);

initateApp(app, express);

export default initateApp;
