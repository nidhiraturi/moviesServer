//import the required modules
var express = require('express');
var router = express.Router();
var customerController = require('../controllers/customerController');
var moviesController = require('../controllers/moviesController');


//api for posting the data of employee
router.route('/v1/createTempuser')
    .post(customerController.postTempUsers);

//api to post verified user
router.route('/v1/createuser')
    .post(customerController.postUser);

//api for getting the all customers from the db
router.route('/v1/getAllCustomers')
    .get(customerController.getAllCustomers);

//api to find user with username
router.route('/v1/getCustomer')
    .post(customerController.postUsername);


//get all movies
router.route('/v1/getMoviesByCategory')
    .post(moviesController.getMoviesByCategory);


//get all series
router.route('/v1/getseriesbyid')
    .post(moviesController.getSeriesByCategory);



//Administration

//delete movie
router.route('/v1/admin/deletemovie/:movieId')
    .delete(moviesController.deleteMovie);

//delete series
router.route('/v1/admin/deleteseries/:seriesId')
    .delete(moviesController.deleteSeries);

//delete seasons
router.route('/v1/admin/deleteseason/:seasonId')
    .delete(moviesController.deleteSeasons);

//delete episode
router.route('/v1/admin/deleteepisode/:seasonId')
    .delete(moviesController.deleteEpisode);

//get season by series
router.route('/v1/getSeasonBySeries')
    .post(moviesController.getSeasonBySeries);

//get movie by id
router.route('/v1/getmoviebyid')
    .post(moviesController.getMoviesById);

//get all the movies
router.route('/v1/getallmovies')
    .get(moviesController.getAllMovies);

//get all the seasons
router.route('/v1/getallseasons')
    .get(moviesController.getAllSeasons);

//get series
router.route('/v1/getallseries')
    .get(moviesController.getAllSeries);

//get categories
router.route('/v1/getallcategories')
    .get(moviesController.getAllCategories);

//post Movie
router.route('/v1/admin/postmovie')
    .post(moviesController.postMovie);

//post Category 
router.route('/v1/admin/postcategory')
    .post(moviesController.postCategory);

//post TV series
router.route('/v1/admin/postseries')
    .post(moviesController.postSeries);

//post TV season
router.route('/v1/admin/postseason')
    .post(moviesController.postSeason);

//post TV episodes
router.route('/v1/admin/postepisode')
    .post(moviesController.postEpisode);

//update movie
router.route('/v1/admin/updatemovie/:movieId')
    .put(moviesController.updateMovie);

//export the router
module.exports = router;
