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
	}
});
module.exports = mongoose.model('Song', Song);