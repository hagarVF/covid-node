import mongoose, { model, Schema } from "mongoose";

const imageSchema = new Schema(
  {
    image: {
      type: String,
      default: "hagar",
    },
    imageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

imageSchema.post("init", (doc) => {
  doc.image = "https://covid-node.vercel.app/" + "public/images/" + doc.image;
});

const imageModel = mongoose.model.Image || model("Image", imageSchema);

export default imageModel;
