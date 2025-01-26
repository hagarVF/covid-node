import mongoose, { model, Schema } from "mongoose";

const citySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cases: {
      type: Number,
      required: true,
    },
    death: {
      type: Number,
      required: true,
    },
    recover: {
      type: Number,
      required: true,
    },
    years: [
      {
        year: {
          type: Number,
          required: true,
        },
        month: {
          type: Number,
          required: true,
        },
        deaths: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const cityModel = mongoose.model.City || model("City", citySchema);

export default cityModel;
