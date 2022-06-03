const mongoose = require('mongoose');
const {Schema} = mongoose;
const user = new Schema({
	name : {
		type : String,
		trim : true,
		required : true,
	},
	email : {
		type : String,
		trim : true,
		required : true,
		unique : true,
	},
	password  : {
		type : String,
		trim : true,
		required : true,
	},
	role : {
		type : Number,
		default : 0,
	}
});
module.exports = mongoose.model('User', user);