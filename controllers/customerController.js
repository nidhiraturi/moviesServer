//Import required module
var tempCustomers = require('../models/tempCustomers');
var CustomerVerified = require('../models/customer');
var nodemailer = require('nodemailer');
var atob = require('atob');
var btoa = require('btoa');
var md5 = require('md5');

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
      return res.json(req, res, error);
    }
    else {
      console.log(response.name, "hello")
      var customerVerified = new CustomerVerified({ // Making Object of Users schema 

        name: response.name,
        email: response.email,
        mobileNumber: response.mobileNumber,
        userName: response.userName,
        password: md5(response.password),
        typeUser: 2,
        verified: true


      });


      customerVerified.save(function (err, response) { // Saving the Data into the Database
        if (err) {
          return res.json(req, res, err);
        }

        res.json({
          success: true,
          body: response
        })

      });

    }

  })
}

//method for the login functionality

exports.postUsername = function (req, res) {
  // creating the new employee
  username1 = req.body.userName;
  password1 = md5(req.body.password);
  console.log(password1);
  //finding customer
  CustomerVerified.findOne({ userName: username1, password: password1 }, function (err, response) {

    if (err) {
      res.json(err);
    }
    if (response) {
      res.json({
        "status": true,
        "respData": {
          "data": response
        }
      });
    }
    else {
      res.json({
        "status": false,
        "respData": {
          "data": "user does not exist"
        }
      });
    }
  });
}


// method to get all the registered customers
exports.getAllCustomers = function (req, res) {
  Customer.find({}, function (error, response) {
    if (error) {
      return res.json(req, res, error);
    }
    //sending the reponse to the browser
    res.json(response);

  });
}

// method to post the non verified users
exports.postTempUsers = function (req, res) {
  var tempCust = new tempCustomers({
    name: req.body.name,
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
    userName: req.body.userName,
    password: md5(req.body.password),
    typeUser: 2,
    code: makeid(),
    verified: false

  });
  console.log("first console")


  //save the creating customer
  tempCust.save(function (error, response) {
    // handle the error
    console.log("in node", tempCust)
    console.log(tempCust.email);
    if (error) {
      return error;
    }
    else {
      //send the response to the browser
      res.json({
        success: true,
        body: response
      });
    }
  });
  // function to send mail to the user
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rraturi.nidhi@gmail.com',
      pass: 'rohannidhi'
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
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}









