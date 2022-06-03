const mongoose = require('mongoose');
const {Schema} = mongoose;
const Song = new Schema({
	name : {
		type : String,
		trim : true,
		required : true,
	},
	file : {
		type : String
	}
	artist_name : {
		type : String,
		trim : true,
		required : true,
	},
	popularity  : {
		type : Number,
	},
	album: { 
		type: Schema.ObjectId,
		ref: 'Album' 
	},
	genre : {
		type : String,
		trim : true,
		required : true,
	}
	
},{timestamps : true});
module.exports = mongoose.model('Song', Song);