const User = require("../../models/user.model");
const bcrypt = require('bcryptjs');

exports.resetPassword = async (_,args) => {
    const user = await User.findOne({ email: args.email }).exec();
	if (!user) {
		return new Error('Invalid Token');
	}
	const password = await bcrypt.hash(args.password, 10);
	const match = await bcrypt.compare(args.password, user.password);
	if (match) {
		return new Error('You can\'t use this password');
	}
	const update = {
		$set: {
			password: password
		},
		$unset: {
			resetToken:""
		}
	}
	await User.updateOne({ email: args.email }, update).exec();
	const response = {
		id: user.id,
		name: user.personalDetails.firstName +" "+user.personalDetails.lastName,
		email: user.email,
	}
	return response;

};
