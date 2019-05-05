
let moviesController = require("../controller/movies.controller");
let express = require("express");
let router =  express.Router();


router.post("/getMovies",(req,res) => moviesController.getMovies(req,res));
router.get("/getMovie/:id",(req,res) => moviesController.getMovie(req,res));
router.get("/getMovieComments/:id",(req,res) => moviesController.getMovieComments(req,res));

module.exports = router;