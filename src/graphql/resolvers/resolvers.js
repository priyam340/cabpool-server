const { sendEmailVerify } = require("./sendEmailVerify.resolver");
const { userExists } = require("./userExists.resolver");
module.exports = {
  Query: { userExists },
  Mutation: { sendEmailVerify },
};
