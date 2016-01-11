//Setup
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

//export module
module.exports = {
    show: function(req, res) {
        Customer.find({}, function(err, customers) {
            res.json(customers);
        })
    },
    show_qty: function(req, res) {
        Customer.find({}).limit(req.params.qty).exec(function(err, products) {
            res.json(products);
        })
    },
    create: function(req, res) {
        var customer = new Customer({name: req.body.name});
        console.log(customer);
        customer.save(function(err) {
            Customer.find({}, function (err, customers) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(customers)
                }
            })
        })
    },
    update: function(req, res) {
        Customer.update({_id: req.params.id}, {name: req.body.name}, function(err) {
            Customer.find({}, function (err, customers) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(customers)
                }
            })
        })
    },
    destroy: function(req, res) {
        Customer.remove({_id: req.params.id}, function(err){
            Customer.find({}, function (err, customers) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(customers)
                }
            })
        })
    }
}