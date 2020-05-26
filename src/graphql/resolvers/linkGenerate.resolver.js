const shortid = require('shortid');
const chatRoom = require("../../models/chat.model");
exports.linkGenerate = async () => {
    let fields = {
        link: "",
    };
    fields.link = shortid.generate();
    const link = await chatRoom(fields).save();
    return fields.link;
  };