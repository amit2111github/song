const Song = require("../models/Song");
const addSong = (req, res) => {
    try {
    	const {name  , file ,artist_name , album } = req.body;
    	let song = new Song({name , file, artist_name , album});
    	song = await  song.save();
    	return res.json(song);
    }
    catch {
    	return res.json({error : "Failed to Create song"}).staus(400);
    }
};
// name : {
// 		type : String,
// 		trim : true,
// 		required : true,
// 	},
// 	file : {
// 		type : String
// 	}
// 	artist_name : {
// 		type : String,
// 		trim : true,
// 		required : true,
// 	},
// 	popularity  : {
// 		type : Number,
// 	},
// 	album: { 
// 		type: Schema.ObjectId,
// 		ref: 'Album' 
// 	}

const removeSong = (req, res) => {
	try {
		const {songId} = req.params;
		const data = await Song.deleteOne({_id :  songId });
		return res.json(data);
	}
	catch(err) { 
		return res.json({error : "Failed to delete"}).status(400);
	}
};

const searchSongByName = (req, res) => {
    try {
		const {songName} = req.params;
		const data = await Song.find({name :  "/" + songName + "/i" });
		return res.json(data);
	}
	catch(err) { 
		return res.json({error : "Failed to find Song"}).status(400);
	}
};

const searchSongByGenre = (req, res) => {
    try {
		const {songGenre} = req.params;
		const data = await Song.find({genre :  songGenre });
		return res.json(data);
	}
	catch(err) { 
		return res.json({error : "Failed to find Song of this genre"}).status(400);
	}
};

const SongsController = {
    addSong,
    removeSong,
    searchSongByName,
    searchSongByGenre
};

module.exports = SongsController;