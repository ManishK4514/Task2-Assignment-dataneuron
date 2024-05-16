import mongoose from "mongoose";

const countSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true  
  }
});

export const CountModel = mongoose.model('Count', countSchema);
