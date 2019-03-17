
let moviesController = require("../controller/movies.controller");
let express = require("express");
let router =  express.Router();


router.post("/getMovies",(req,res) => moviesController.getMovies(req,res));

module.exports = router;