//Variables
var users = require("../controllers/users.js");
var questions = require("../controllers/questions.js");

//export module
module.exports = function(app){
    //Routes
    app.get("/", function(req, res){
        res.render('index');
    })
    
    //getting all
    app.get("/questions", function(req, res){
        questions.show(req, res);
    })
    app.get("/users", function(req, res){
        users.show(req, res);
    })
    
    //single user
    app.get("/user/:name", function(req, res){
        users.find(req, res);
    })
    
    //creating
    app.post("/questions", function(req, res){
        questions.create(req, res);
    })
    app.post("/users", function(req, res){
        users.create(req, res);
    })

    //updating
    app.post("/user/:id", function(req, res){
        users.update_score(req, res);
    })
}