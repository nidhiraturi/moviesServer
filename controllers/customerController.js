//Import required module
var tempCustomers = require('../models/tempCustomers');
var CustomerVerified = require('../models/customer');
var nodemailer = require('nodemailer');
var response1 = require('../response');
var atob = require('atob');
var btoa = require('btoa');
let jwt = require('jsonwebtoken');
var password1 = require('../password');
var multer  = require('multer')
var response1=require('../response');

//method to create the random number
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 30; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


//method to post the verified user
exports.postUser = function (req, res) { // Function to Post the Data in Users Collection of Database
  var code = req.body.code;
  console.log("in final", code)
  tempCustomers.findOne({ code: code }, function (error, response) { // Function to Find all the Users from collection 
    if (error) {
      response1.error1(error,res)
    }
    else {
    
      var customerVerified = new CustomerVerified({ // Making Object of Users schema 

        name: response.name,
        email: response.email,
        mobileNumber: response.mobileNumber,
        userName: response.userName,
        password: password1.passwordEncryption(response.password),
        typeUser: 2,
        verified: true


      });


      customerVerified.save(function (err, response) { // Saving the Data into the Database
        if (err) {
          response1.error1(err,res)
        }

       response1.success(response,res)

      });

    }

  })
}

//method for the login functionality

exports.postUsername = function (req, res) {

  username1 = req.body.userName;
  password2= password1.passwordEncryption(req.body.password)
  
  
  //finding customer
  CustomerVerified.findOne({ userName: username1, password: password2 }, function (err, response) {
     
  
    if(err)
    {
     response1.error1(err,res)
    }

else 
{
  var token = jwt.sign({ "status": "true" }, 'my_app_secret')
  return  res.json({
        "status": true,
        "respdata": {
          "data": response,
          "token": token
        }

      })
}




  });
}


// method to get all the registered customers
exports.getAllCustomers = function (req, res) {
  CustomerVerified.find({}, function (error, response) {
    if (error) {
      response1.error1(error,res)
    }
    //sending the reponse to the browser
    response1.success(response,res)

  });



}
exports.uploadImage = function (req, res)  {
  
  var storage = multer.diskStorage({
      destination: function (req, res, next) {
          next(null, './images');
      },
      filename: function (req, file, next) {
          next(null, file.originalname + '-' + Date.now() + '.jpg')
      }
  });
  
  var upload = multer({ storage: storage }).any('image'); 
  upload(req, res, error=> {
      if(error) {
          return res.json(error);
      }
      res.json({
          message: 'Uploaded'
      })
  }) 
}
// method to post the non verified users
exports.postTempUsers = function (req, res) {
   var tempCust = new tempCustomers({
    name: req.body.name,
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
    userName: req.body.userName,
    password: password1.passwordEncryption(req.body.password),
    typeUser: 2,
    code: makeid(),
    verified: false

  });
  


  //save the creating customer
  tempCust.save(function (error, response) {
    // handle the error
   
    if (error) {
     response1.error1(error,res)
    }
    else {
      //send the response to the browser
      response1.success(response,res)
    }
  });
  // function to send mail to the user
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rraturi.nidhi@gmail.com',
      pass: 'hbvh'
    }
  });
  code = tempCust.code;
  var mailOptions = {

    from: 'rraturi.nidhi@gmail.com',
    to: tempCust.email,
    subject: 'Sending Email using Node.js',
    text: 'http://localhost:4200/emailverify/' + code
    // text:"verify the email by clicking on the link"
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      response1.error1(error,res);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}












