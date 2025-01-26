import { Router } from "express";
import * as cityController from "./city.controller.js";
import { uploadSingleFile } from "../../middleware/fileUpload.js";

const router = Router();

router.post("/", uploadSingleFile("image"), cityController.addCity);
router.get("/getAll", cityController.getAllData);

// router.route("/").post(cityController.addCity).get(cityController.getcity);

router.post("/uploadImage", uploadSingleFile("image"), cityController.addImage);
export default router;
