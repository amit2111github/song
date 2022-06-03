const getMostPopularSongs = async (req, res) => {
  	const data = await Song.find({}).sort({popularity : 'dsc'});
  	return res.json(data);
};


const getRecentlyAddedSongs = (req, res) => {
    //getRecentlyAddedSongs api logic here
};



const ChartController = {
    getMostPopularSongs,
    getRecentlyAddedSongs
};

module.exports = ChartController;