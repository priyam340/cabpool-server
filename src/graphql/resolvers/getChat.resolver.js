const chatRoom = require("../../models/chat.model");
exports.getChat = async (_, { link }) => {
  const chat = await chatRoom.find({ link: link }).exec();
  const allmsg = [];
  for (let i = 0; i < chat[0].message.length; i += 1) {
    const temp = {
      email: chat[0].message[i].email,
      text: chat[0].message[i].text,
    };
    allmsg.push(temp);
  }
  return allmsg;
};
