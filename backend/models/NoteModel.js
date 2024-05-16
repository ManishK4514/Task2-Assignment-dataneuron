import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

export const NoteModel = mongoose.model('Note', noteSchema);
