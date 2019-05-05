let moviesDAO = require("../dao/movies.dao");
let moviesController = {};

moviesController.getMovies = async (req, res) => {
	let start = req.body.start;
	let end = req.body.end;
	let movies = await moviesDAO.getMovies(start);
	res.json({
		"movies": movies
	});
	res.end();
}

//API to get all the comments for a single Movie
moviesController.getMovieComments = async (req, res) => {
	let movieId = req.params.id;
	let movieComments = await moviesDAO.getCommentsforMovie(movieId);
	res.json({
		"comments": movieComments
	});
	res.end();
}

//API to get the movie Details
moviesController.getMovie = async (req,res) =>{
	let movieId  = req.params.id;
	let movieDetails = await moviesDAO.getMovie(movieId);
	let query = `${movieDetails.title} ${movieDetails.year}`;
	let youtubeTrailerId = await moviesDAO.getYoutubeId(query);
	console.log(youtubeTrailerId);
	movieDetails.videoId = youtubeTrailerId;
	res.json(movieDetails);
	res.end();
};
module.exports = moviesController;