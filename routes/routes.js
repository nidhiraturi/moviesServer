//import the required modules
var express = require('express');
var router = express.Router();
var customerController = require('../controllers/customerController');
var productController=require('../controllers/productController');
var moviesController=require('../controllers/moviesController');


//api for posting the data of employee
router.route('/v1/createTempuser')
    .post(customerController.postTempUsers);

    router.route('/v1/createuser')
    .post(customerController.postUser);
router.route('/v1/product/create')
    .post(productController.postProduct);
    router.route('/v1/Customer/postBill')
    .post(customerController.postCustomerBill);
//api for getting the all employees from the db
router.route('/v1/getAllCustomers')
    .get(customerController.getAllCustomers);
//api to find user with username
router.route('/v1/getCustomer')
    .post(customerController.postUsername);

    router.route('/v1/getallproducts')
    .get(productController.getAllProducts);
    //get all movies
    router.route('/v1/getMoviesByCategory')
    .post(moviesController.getMoviesByCategory);

    router.route('/v1/createmovie')
    .post(moviesController.postMovie);

    router.route('/v1/getallcategories')
    .get(moviesController.getAllCategories);

router.route('/v1/postcategory')
    .post(moviesController.postCategory);
    //api for getting the product data from its id
router.route('/v1/getProduct/:productId')
.get(productController.getProduct);

router.route('/v1/getProductById')
.post(productController.getProById);

router.route('/v1/getProductByCategory')
.post(productController.getProductByCategory);





//export the router
module.exports = router;
