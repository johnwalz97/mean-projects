//Setup
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

//export module
module.exports = {
    show: function(req, res) {
        Product.find({}, function(err, products) {
            res.json(products);
        })
    },
    show_qty: function(req, res) {
        Product.find({}).limit(req.params.qty).exec(function(err, products) {
            res.json(products);
        })
    },
    create: function(req, res) {
        var product = new Product({name: req.body.name});
        product.save(function(err) {
            Product.find({}, function (err, products) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(products)
                }
            })
        })
    },
    update: function(req, res) {
        Product.update({_id: req.params.id}, {name: req.body.name}, function(err) {
            Product.find({}, function (err, products) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(products)
                }
            })
        })
    },
    destroy: function(req, res) {
        Product.remove({_id: req.params.id}, function(err){
            Product.find({}, function (err, products) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(products)
                }
            })
        })
    }
}