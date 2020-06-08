const { sendEmailVerify } = require("./sendEmailVerify.resolver");
const { userExists } = require("./userExists.resolver");
const { linkGenerate } = require("./linkGenerate.resolver");
const { sendMessage } = require("./sendMessage.resolver");
const { signUp } = require("./signUp.resolver");
const { resetPassword } = require("./resetPassword.resolver");
module.exports = {
  Query: { userExists },
  Mutation: { sendEmailVerify, linkGenerate, sendMessage, signUp, resetPassword },
  Subscription: {
    getChatDetails: {
      subscribe: (_, { link }, { pubsub }) => {
        return pubsub.asyncIterator(`getChatDetails${link}`);
      },
    },
  },
};
