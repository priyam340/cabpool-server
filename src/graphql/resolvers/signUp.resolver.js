const User = require("../../models/user.model");
const bcrypt = require('bcryptjs');

exports.signUp = async (_,args) => {
    const password = bcrypt.hashSync(args.input.password, 10);
    let fields = {
		email: args.input.email.toLowerCase(),
		password: password,
		personalDetails: args.input.personalDetails,
    };

    const user = await User(fields).save();
    const response = {
		id: user.id,
		name: user.personalDetails.firstName +" "+user.personalDetails.lastName,
		email: user.email,
	}
	return response;
};
