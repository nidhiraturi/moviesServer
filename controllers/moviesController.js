//get all category
var Category = require('../models/category')
var Movies=require('../models/movie')
exports.getAllCategories = function (req, res) {
    
        Category.find({}, function (error, response) {
            console.log("in cat")
            if (error) {
                return res.json(req, res, error);
            }
    
            res.json(response);
    
        });
    }
    exports.getMoviesByCategory = function (req, res) {
        // creating the new employee
        var myarray = [];
        console.log("in final")
        console.log(req.body.categoryId)
        categoryId = req.body.categoryId;
    
        
        //finding customer
        Movies.find({ category_id: categoryId }, function (error, response) {
    
            if (error) {
                return res.json(req, res, error);
            }
    
            res.json(response);
    
        });
        //end of save method
    } // end 

    exports.postMovie = function (req, res) {
        console.log(res);
        var movie = new Movies({
            category_id:req.body.categoryId,
            movieId:req.body.movieId,
            movieName:req.body.movieName,
            movieImagePath:req.body.movieImagePath
    
        });
    
        
    
        //save the creating customer
        movie.save(function (error, response) {
            // handle the error
            console.log("in node", response)
            if (error) {
                res.json({
                    success: false,
                    body: error
                });
            }
            else {
                //send the response to the browser
                res.json(response);
            }
        }); 
    }

    exports.postCategory = function (req, res) {
        console.log(res);
        var category = new Category({
           
            
            category_name:req.body.movieName,
            
    
        });
    
        
    
        //save the creating customer
        category.save(function (error, response) {
            // handle the error
            console.log("in node", response)
            if (error) {
                res.json({
                    success: false,
                    body: error
                });
            }
            else {
                //send the response to the browser
                res.json(response);
            }
        }); 
    }