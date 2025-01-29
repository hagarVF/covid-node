import { connectionDB } from "../../DB/connection.js";
import * as allRouter from "../module/index.routes.js";
import cors from "cors";

export const initateApp = (app, express) => {
  app.use(express.json());
  app.use(cors());

  app.use("/city", allRouter.cityRouter);
  app.use("/images", express.static("public/images"));
  app.all("*", (req, res) => {
    res.json({ message: "not found" });
  });
  const port = process.env.PORT || 5000;
  connectionDB();
  app.listen(port, () => {
    console.log("Listening on port 5000");
  });
};
