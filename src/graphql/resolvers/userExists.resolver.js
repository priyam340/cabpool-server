const User = require("../../models/user.model");
exports.userExists = async (_, { email }) => {
  const user = await User.find({ email: email }).exec();
  console.log(user);
  return user.length == 0 ? false : true;
};
