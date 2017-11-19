// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var nodemon=require('nodemon');


var expressJWT = require('express-jwt');

var cors = require('cors'); // To allow Cross-Origin Restrictions

// Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/emoviesdb',{useMongoClient:true});

// Create Express application
var app = module.exports = express();

var NODE_ENV = 'development';
//Set Variables
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes = require('./routes/routes')
app.use(expressJWT({secret:'my_app_secret'}).unless({path:['/api/v1/getCustomer','/api/v1/createTempuser','/api/v1/upload/image']}));
app.use('/api', routes);

// Use environment defined port or 3000
var port = process.env.PORT || 8888;

app.use(cors());
// app.use(function (req, res, next) {  
//       // Website you wish to allow to connect
//         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');  
//           // Request methods you wish to allow 
//            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
//             // Request headers you wish to allow
//               res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
//                 // Set to true if you need the website to include cookies in the requests sent  // to the API (e.g. in case you use sessions) 
//                  res.setHeader('Access-Control-Allow-Credentials', true);  
//   // Pass to next layer of middleware  
//   next();
// });



// Start the server
app.listen(port);
console.log('Server starts on port ' + port);
