import mongoose, { Schema } from "mongoose";

const LinkSchema = new Schema({
  url: {
    type: String,
    required: [true, "URL is required"],
    trim: true,
  },
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  tag: {
    type: String,
    default: "personal",
    trim: true,
  },
});

export const Link = mongoose.model("Link", LinkSchema);
