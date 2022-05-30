import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);
