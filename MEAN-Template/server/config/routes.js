//Variables
var customers = require("../controllers/customers.js");
var products = require("../controllers/products.js");
var orders = require("../controllers/orders.js");

//export module
module.exports = function(app){
    //Routes
    app.get("/", function(req, res){
        res.render('index');
    })
    
    //getting all
    app.get("/products", function(req, res){
        products.show(req, res);
    })
    app.get("/customers", function(req, res){
        customers.show(req, res);
    })
    app.get("/orders", function(req, res){
        orders.show(req, res);
    })
    
    //getting certain amount
    app.get("/products/:quantity", function(req, res){
        products.show_qty(req, res);
    })
    app.get("/customers/:quantity", function(req, res){
        customers.show_qty(req, res);
    })
    app.get("/orders/:quantity", function(req, res){
        orders.show_qty(req, res);
    })
    
    //creating
    app.post("/products", function(req, res){
        products.create(req, res);
    })
    app.post("/customers", function(req, res){
        console.log("new custoemr");
        customers.create(req, res);
    })
    app.post("/orders", function(req, res){
        orders.create(req, res);
    })

    //updating
    app.post("/product/:id", function(req, res){
        products.update(req, res);
    })
    app.post("/customer/:id", function(req, res){
        customers.update(req, res);
    })
    app.post("/order/:id", function(req, res){
        orders.update(req, res);
    })
    
    //deleting
    app.get("/product/delete/:id", function(req, res){
        products.destroy(req, res);
    })
    app.get("/customer/delete/:id", function(req, res){
        customers.destroy(req, res);
    })
    app.get("/order/delete/:id", function(req, res){
        orders.destroy(req, res);
    })
}