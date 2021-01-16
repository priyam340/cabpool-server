const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,

    security: {
      token: String,
      validTill: Date,
    },
    resetToken: {
      token: String,
      validTill: Date
    },
    personalDetails: {
      firstName: String,
      lastName: String,
      gender: String,
      mobileNumber: Number,
    },
  },
  { strict: false }
);

module.exports = mongoose.model("User", UserSchema);
