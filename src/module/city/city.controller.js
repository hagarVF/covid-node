import cityModel from "../../../DB/modules/city.model.js";
import imageModel from "../../../DB/modules/image.model.js";

export const addCity = async (req, res, next) => {
  const result = new cityModel(req.body);
  await result.save();
  res.json({ message: "added successfuly", result });
};

export const addImage = async (req, res, next) => {
  try {
    const { imageId } = req.body;
    const cityExist = await cityModel.findById(imageId);
    if (cityExist) {
      if (req.file) req.body.image = req.file.filename;
      const newImageData = { ...req.body, cityId: imageId };
      const result = new imageModel(newImageData);
      await result.save();
      res.json({ message: "image added successfuly", result });
    } else {
      res.json({ message: "No city found" });
    }
  } catch (error) {
    res.json({ message: "Catch Error" });
  }
};

export const getAllData = async (req, res) => {
  try {
    let result = await imageModel.find().populate({
      path: "imageId",
    });
    res.json({ message: "Done", result });
  } catch (error) {
    console.log(error);
  }
};
