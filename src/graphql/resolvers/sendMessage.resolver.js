const Chat = require("../../models/chat.model");
exports.sendMessage = async (_, { link, email, text }) => {
  await Chat.findOneAndUpdate(
    { link: link },
    { $push: { message: { email, text } } },
    { new: true }
  ).exec();

  return text;
};
