let moviesDAO = require("../dao/movies.dao");
let moviesController = {};

moviesController.getMovies  = async (req,res) =>{
	// console.log(req.body);
	let start = req.body.start;
	let end = req.body.end;
	let movies = await moviesDAO.getMovies(start,end);
	res.json({
		"movies": movies
	});
	res.end();
	return movies;
}

module.exports = moviesController;