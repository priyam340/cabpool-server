const { sendEmailVerify } = require("./sendEmailVerify.resolver");
const { userExists } = require("./userExists.resolver");
const { linkGenerate} = require("./linkGenerate.resolver");
module.exports = {
  Query: { userExists },
  Mutation: { sendEmailVerify , linkGenerate},
};
