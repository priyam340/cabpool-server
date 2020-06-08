const { sendEmailVerify } = require("./sendEmailVerify.resolver");
const { userExists } = require("./userExists.resolver");
const { linkGenerate } = require("./linkGenerate.resolver");
const { sendMessage } = require("./sendMessage.resolver");
const { signUp } = require("./signUp.resolver");
const { getChat } = require("./getChat.resolver");
module.exports = {
  Query: { userExists, getChat },
  Mutation: { sendEmailVerify, linkGenerate, sendMessage, signUp },
  Subscription: {
    getChatDetails: {
      subscribe: (_, { link }, { pubsub }) => {
        return pubsub.asyncIterator(`getChatDetails${link}`);
      },
    },
  },
};
