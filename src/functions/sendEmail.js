exports.sendEmail = async (type, email, extra) => {
  var nodemailer = require("nodemailer");
  let link = "";
  let html = "";
  let subject = "";
  if (type == "otp") {
    subject = "Cabpooling Verification Otp";
    html = "<html>Hello , your verification otp is " + extra.otp + "</html>";
  }
  var transporter = nodemailer.createTransport({
    host: "smtp.stackmail.com",
    port: 465,
    auth: {
      user: "admin@cabpooling.cb",
      pass: "cabpool12",
    },
  });

  var mailOptions = {
    from: "admin@cabpooling.cb",
    to: email,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
