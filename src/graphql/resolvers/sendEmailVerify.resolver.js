const { sendEmail } = require("../../functions/sendEmail");
exports.sendEmailVerify = async (_, { email }) => {
  extra = { otp: 1234 };
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  extra.otp = OTP;
  sendEmail("otp", email, extra);
  return email;
};
