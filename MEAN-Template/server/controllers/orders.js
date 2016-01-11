//Setup
var mongoose = require('mongoose');
var Order = mongoose.model('Order');

//export module
module.exports = {
    show: function(req, res) {
        Order.find({}, function(err, orders) {
            res.json(orders);
        })
    },
    show_qty: function(req, res) {
        Order.find({}).limit(req.params.qty).exec(function(err, products) {
            res.json(products);
        })
    },
    create: function(req, res) {
        var order = new Order({product: req.body.product, customer: req.body.customer, quantity: req.body.quantity});
        order.save(function(err) {
            Order.find({}, function (err, orders) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(orders)
                }
            })
        })
    },
    update: function(req, res) {
        Order.update({_id: req.params.id}, {product: req.body.product, customer: req.body.customer, quantity: req.body.quantity}, function(err) {
            Order.find({}, function (err, orders) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(orders)
                }
            })
        })
    },
    destroy: function(req, res) {
        Order.remove({_id: req.params.id}, function(err){
            Order.find({}, function (err, orders) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(orders)
                }
            })
        })
    }
}