import mongoose from "mongoose";

export const connectionDB = async () => {
  return await mongoose
    .connect(process.env.DB_URL)
    .then((res) => console.log("DB is running successfuly"))
    .catch((err) => console.log("Error connecting", err));
};
