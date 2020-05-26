const Chat = require("../../models/chat.model");
exports.sendMessage = async (_, { link, email, text }, { pubsub }) => {
  await Chat.findOneAndUpdate(
    { link: link },
    { $push: { message: { email, text } } },
    { new: true }
  ).exec();
  const chat = await Chat.find({ link: link }).exec();
  const allmsg = [];
  for (let i = 0; i < chat[0].message.length; i += 1) {
    const temp = {
      email: chat[0].message[i].email,
      text: chat[0].message[i].text,
    };
    allmsg.push(temp);
  }

  pubsub.publish(`getChatDetails${link}`, {
    getChatDetails: allmsg,
  });

  return text;
};
