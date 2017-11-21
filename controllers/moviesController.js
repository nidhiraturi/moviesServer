//import all the models
var Category = require('../models/category')
var Movies = require('../models/movie')
var Series = require('../models/series')
var Season = require('../models/seasons')
var Episode = require('../models/episodes')
var response1=require('../response');


//function to get alll the categories
exports.getAllCategories = function (req, res) {

    Category.find({}, function (error, response) {
        console.log("in cat")
        if (error) {
           
            response1.error1(error,res)
        }
        response1.success(response,res);
   

   

    });
}

//function to get all the movies
exports.getAllMovies = function (req, res) {

    Movies.find({}, function (error, response) {
        console.log("in movie")
        if (error) {
            response1.error1(error,res)
        }

        response1.success(response,res);
    });
}

//function to get all the series
exports.getAllSeries = function (req, res) {

    Series.find({}, function (error, response) {
        console.log("in cat")
        if (error) {
            response1.error1(error,res)
        }

        response1.success(response,res)

    });
}

//function to get all the seasons
exports.getAllSeasons = function (req, res) {

    Season.find({}, function (error, response) {
        console.log("in cat")
        if (error) {
            response1.error1(error,res)
        }

        response1.success(response,res)

    });
}

//function to get all the movies according to category id
exports.getMoviesByCategory = function (req, res) {

    var myarray = [];
    console.log("in final")
    console.log(req.body.categoryId)
    categoryId = req.body.categoryId;
    Movies.find({ category_id: categoryId }, function (error, response) {

        if(response.length==0)
        {
            response1.error1(error,res)   
        }
       else if (error) {
            response1.error1(error,res)
        }

        response1.success(response,res)

    });


}

//function to get all the series according category id
exports.getSeriesByCategory = function (req, res) {

    var myarray = [];
    console.log("in final")
    console.log(req.body.categoryId)
    categoryId = req.body.categoryId;



    Series.find({ category_id: categoryId }, function (error, response) {

        if(response.length==0)
        {
            response1.error1(error,res)   
        }
       else if (error) {
            response1.error1(error,res)
        }

        response1.success(response,res)

    });


}

//function to get all the movies by movie Id
exports.getMoviesById = function (req, res) {


    console.log("in final mbyid")
    console.log(req.body.movieId)
    movieId = req.body.movieId;


    //finding customer
    Movies.find({ movieId: movieId }, function (error, response) {
        if(response.length==0)
        {
            response1.error1(error,res)   
        }
       else if (error) {
            response1.error1(error,res)
        }

        response1.success(response,res)

    });
    //end of save method
} // end 

//function to get all the season according to seriesId
exports.getSeasonBySeries = function (req, res) {
    // creating the new employee

    console.log("in final")
    console.log(req.body.seriesType)
    seriessId = req.body.seriesType;



    Season.find({ seriesId: seriessId }, function (error, response) {

        if(response.length==0)
        {
            response1.error1(error,res)   
        }
      else  if (error) {
            response1.error1(error,res)
        }

        response1.success(response,res)
        
    });

}

//function to add movie in db(post movie)
exports.postMovie = function (req, res) {
    console.log(res);
    var movie = new Movies({
        category_id: req.body.categoryId,
        movieId: req.body.movieId,
        movieName: req.body.movieName,
        movieImagePath: req.body.movieImagePath

    });




    movie.save(function (error, response) {
        // handle the error
        console.log("in node", response)
        if(response.length==0)
        {
            response1.error1(error,res)   
        }
      else  if (error) {
            response1.error1(error,res)
        }
        else {
            //send the response to the browser
            response1.success(response,res)
        }
    });
}

//post Movie Function and auto genertated id
exports.postMovie = function (req, res) { // Function to Post the Data in Users Collection of Database
    Movies.find({}, function (error, response) { // Function to Find all the Users from collection 
       
        id = response[0].movieId
        console.log("in postmovie", response)
        var movie = new Movies({ // Making Object of season Schema
            movieName: req.body.movieName,
            category_id: req.body.categoryType,
            movieId: id + 1,
            movieImagePath: req.body.movieImagePath

        });
        movie.save(function (err, response) { // Saving the Data into the Database
            if(response.length==0)
            {
                response1.error1(error,res)   
            }
           else if (err) {
                response1.error1(error,res)
            }
            response1.success(response,res)

        })
    }).sort({
        movieId: -1
    }).limit(1);
}


//function to add categories 
exports.postCategory = function (req, res) { // Function to Post the Data in Users Collection of Database
    Category.find({}, function (error, response) { // Function to Find all the Users from collection 
        if (error) {
            response1.error1(error,res)
        }
        id = response[0].category_id;

        console.log(id);
        var category = new Category({ // Making Object of season Schema
            category_id: id + 1,
            category_name: req.body.categoryName,




        });
        category.save(function (err, response) { // Saving the Data into the Database
            if (err) {
                response1.error1(err,res)
            }

            response1.success(response,res)

        });
    }).sort({
        category_id: -1
    }).limit(1);
}

//function to post series
exports.postSeries = function (req, res) { // Function to Post the Data in Users Collection of Database
    Series.find({}, function (err, response) { // Function to Find all the Users from collection 
        if (err) {
            return res.json(req, res, err);
        }
        id = response[0].seriesId
        console.log("in postmovie", response)
        var series = new Series({ // Making Object of season Schema
            category_id: req.body.categoryType,
            seriesId: id + 1,
            seriesName: req.body.seriesName,
            seriesImagePath: req.body.seriesImagePath,
            createdDate: req.body.createdDate,
            updatedDate: req.body.updatedDate


        });
        series.save(function (err, response) { // Saving the Data into the Database
            if (err) {
                response1.error1(err,res)
            }

            response1.success(response,res)

        });
    }).sort({
        seriesId: -1
    }).limit(1);
}

// function to post seasons
exports.postSeason = function (req, res) { // Function to Post the Data in Users Collection of Database
    Season.find({}, function (err, response) { // Function to Find all the Users from collection 
        if (err) {
            return res.json(req, res, err);
        }
        id = response[0].seasonId
        console.log("in postseason", response)
        var season = new Season({ // Making Object of season Schema
            seriesId: req.body.seriesType,
            seasonId: id + 1,
            seasonName: req.body.seasonName,
            seasonImagePath: req.body.seasonImagePath,
            createdDate: req.body.createdDate,
            updatedDate: req.body.updatedDate


        });
        season.save(function (err, response) { // Saving the Data into the Database
            if (err) {
                response1.error1(err,res)
            }

            response1.success(response,res)

        });
    }).sort({
        seasonId: -1
    }).limit(1);
}

//function to post episodes
exports.postEpisode = function (req, res) { // Function to Post the Data in Users Collection of Database
    Episode.find({}, function (err, response) { // Function to Find all the Users from collection 
        if (err) {
            return res.json(req, res, err);
        }
        id = response[0].episodeId
        console.log("in postseason", response)
        var episode = new Episode({ // Making Object of season Schema
            seriesId: req.body.seriesType,
            seasonId: req.body.seasonType,
            episodeId: id + 1,
            episodeName: req.body.episodeName,
            episodeImagePath: req.body.episodeImagePath,
            createdDate: req.body.createdDate,
            updatedDate: req.body.updatedDate




        });
        console.log("in post episode", episode)
        episode.save(function (err, response) { // Saving the Data into the Database
            if (err) {
                response1.error1(err,res)
            }

            response1.success(response,res)

        });
    }).sort({
        episodeId: -1
    }).limit(1);
}

// function to update movie details
exports.updateMovie = function (req, res) {
    var movieId = req.params.movieId;
    console.log(movieId)
    Movies.findOne({
        movieId: movieId
    }, function (error, mov) {
        if (error) {
            response1.error1(error,res)
        }

        var name = req.body.movieName;

        mov.movieName = name;


        mov.save(function (err, response) {
            if (err) {
                response1.error1(err,res)
            }
            else {
                response1.success(response,res)
            }
        })
    })
}


// //function to  delete Movie 
// exports.deleteMovie = function (req, res) {
//     var movieId = req.params.movieId;
//     console.log("in delete", movieId)
//     Movies.findOne({ movieId: movieId }, function (error, emp) {
//         if (error) {
//             res.json(error);
//         }
//         Movies.remove({ movieId: movieId }, function (err, qres) {
//             if (err) {
//                 res.json(err);
//             }
//             res.json("Successfully Deleted");
//         });

//     });
// }


//function to  delete Movie 
exports.deleteMovie = function (req, res) {

    console.log("in delete")
    var movieId = req.params.movieId;
    console.log("in delete", movieId)
    Movies.update({ movieId: movieId }, {$set: {deleted: true}}, function(err, result) {
        if(err)
        {
            res.json(err)
        }
        res.json("deleted");

    });
}

//function to delete the season and its respective episodes
exports.deleteSeasons = function (req, res) {
    seasonId = req.params.seasonId;
    Season.findOne({
        seasonId: seasonId
    }, function (err, user) {
        if (err) {
            res.json(err);
        }

        if (user) {
            Season.remove({
                seasonId: seasonId
            }, function (err) {
                if (err) {
                    res.json(err);
                }
                console.log("above", seasonId)
                Episode.remove({
                    seasonId: seasonId
                }, function (err) {
                    if (err) {
                        res.json(err);
                    }
                    res.json("success")


                })

            })



        } else {
            res.json("User doesnt exist");
        }
    })









}





//function to delete series and its respective seasons and episodes

exports.deleteSeries = function (req, res) {
    var seriesId = req.params.seriesId;
    console.log(seriesId);
    Series.findOne({
        seriesId: seriesId
    }, function (err, user) {
        if (err) {
            res.json(err);
        }

        if (user) {
            Series.remove({
                seriesId: seriesId
            }, function (err) {
                if (err) {
                    res.json(err);
                }
                console.log("above", seriesId)
                Season.remove({
                    seriesId: seriesId
                }, function (err) {
                    if (err) {
                        res.json(err);
                    }
                    Episode.remove({
                        seriesId: seriesId
                    }, function (err) {
                        if (err) {
                            res.json(err);
                        }
                        res.json("success")
                        console.log("success")
                    })


                })

            })



        } else {
            res.json("User doesnt exist");
        }
    })









}

//function to delete episodes
exports.deleteEpisode = function (req, res) {
    var episodeId = req.params.episodeId;
    console.log("in delete", episodeId)
    Episode.findOne({ episodeId: episodeId }, function (error, emp) {
        if (error) {
            res.json(error);
        }
        Episode.remove({ episodeId: episodeId }, function (err, qres) {
            if (err) {
                res.json(err);
            }
            res.json("Successfully Deleted");
        });

    });
}

