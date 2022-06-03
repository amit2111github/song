const User = require("../models/User");
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');


const hashPassword = (plainpassword , salt ) => {
	return crypto.createHmac("sha256", salt).update(plainpassword).digest("hex");
}
const AuthController = {
    login  : (req , res ) => {
    	const {email , password} = req.body;
    	const user = User.findOne({email});
    	if(!user) {
    		return res.json({{ error: 'Email not exists' }).status(400);
    	}
    	if(user.password !== hashPassword(password , user.salt)) {
    		res.status(401).json({ error: 'Wrong Password'});
    	}
    	const token = jwt.sign({ _id: user._id }, "something secret");
		res.cookie('token', token, { expire: new Date() + 9999 });

		const { _id, name, email } = user;
		return res.json({ token, user: { _id, name, email} });
    },
    signup : (req ,res ) => {
    	try {
    		let user = User.findOne({email : req.body.email});
    		if(user) {
    			return res.json({{ error: 'Email Already exists' }).status(400);		
    		}
    		user = new User(req.body);
    		user.salt = uuidv4();
    		user.password = hashPassword(user.password , user.salt);
    		user = await user.save();
    		return res.json(user);
    	}
    	catch (err) {
    		console.log(err);
    		return res.json("Failed to Create Account").status(404);
    	}
    }
};

module.exports = AuthController;