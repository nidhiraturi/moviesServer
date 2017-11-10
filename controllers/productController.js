var Product = require('../models/product');
var Category = require('../models/category')

// function makeid() {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
//     for (var i = 0; i <30; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
  
//     return text;
//   }
  
//   console.log(makeid());




exports.postProduct = function (req, res) {
    var product = new Product({
        ProductId: req.body.productId,
        productName: req.body.proname,
        productPrice: req.body.productPrice,
        productQuantity: req.body.productQuantity,
        productImagePath: req.body.ProductImagePath,
        category_id: req.body.category_id

    });

    console.log(product);

    //save the creating customer
    product.save(function (error, response) {
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

exports.getProduct = function (req, res) {



    var Id = req.params.productId;

    Product.findOne({ productId: Id }, function (error, response) {
        if (error) {
            return res.json(error)
        }
        res.json(response);
    });
}


exports.getAllProducts = function (req, res) {

    Product.find({}, function (error, response) {
        if (error) {
            return res.json(req, res, error);
        }

        res.json(response);

    });
}

//get all category

exports.getAllCategories = function (req, res) {

    Category.find({}, function (error, response) {
        console.log("in cat")
        if (error) {
            return res.json(req, res, error);
        }

        res.json(response);

    });
}

exports.getProById = function (req, res) {

    var cart = [];
    var myarray = [];
    cart = req.body.item;


    cart.forEach(function (product, index, arr) {

        Product.findOne({ productId: product }, function (error, response) {

            if (error) {

                return res.json(error);
            }
            myarray.push({
                productName: response.productName, productId: response.productId, productPrice: response.productPrice
                , productImagePath: response.productImagePath, productQuantity: response.productQuantity
            })

            if (index == arr.length - 1) {

                res.json(myarray)
            }
        });


    });

}

//find the first employee form the collection

//     for (item in cart) {

//         Product.findOne({ productId: cart[item] }, function (error, response) {
//             console.log(response.productName)
//             console.log(response.productId)
//             myarray.push({productName:response.productName,productId:response.productId,productPrice:response.productPrice})
// // myarray[item]=JSON.stringify(response)
//             // if (error) {
//             //     return res.json(error)
//             // }

//             console.log(myarray)
//         });


//     }
//     console.log(myarray)
exports.getProductByCategory = function (req, res) {
    // creating the new employee
    var myarray = [];
    console.log("in final")
    categoryId = req.body.category_id;

    console.log(categoryId);
    //finding customer
    Product.find({ category_id: categoryId }, function (error, response) {

        if (error) {
            return res.json(req, res, error);
        }

        res.json(response);

    });
    //end of save method
} // end 