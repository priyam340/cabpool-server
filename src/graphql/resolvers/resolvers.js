const { sendEmailVerify } = require("./sendEmailVerify.resolver");
const { userExists } = require("./userExists.resolver");
const { linkGenerate } = require("./linkGenerate.resolver");
const { sendMessage } = require("./sendMessage.resolver");
module.exports = {
  Query: { userExists },
  Mutation: { sendEmailVerify, linkGenerate, sendMessage },
};
