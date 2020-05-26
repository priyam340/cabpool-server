const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
  {
    link: { type: String, unique: true },
    createdBy: String,
    message: [
      {
        email: String,
        text: String,
      },
    ],
  },
  { strict: false }
);

module.exports = mongoose.model("chatRoom", ChatSchema);
