const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },

    security: {
      token: String,
      validTill: Date,
    },

    personalDetails: {
      name: String,
      gender: String,
      mobileNumber: Number,
    },
  },
  { strict: false }
);

module.exports = mongoose.model("User", UserSchema);
