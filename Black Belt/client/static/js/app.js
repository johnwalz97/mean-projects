var BlackBeltApp = angular.module('BlackBelt', ['ngRoute']);

//configure routes
BlackBeltApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/dashboard.html'    
        })
        .when('/new_question', {
            templateUrl: '/partials/question.html'    
        })
        .when('/lets_play', {
            templateUrl: '/partials/play.html'    
        })
        .otherwise({
            redirectTo: '/'
        });
});

//users factory
BlackBeltApp.factory('userFactory', function(){
    var factory = {};
    factory.flag = false;
    factory.current_user;
    factory.setUser = function(user, callback){
        $.get(
            "/user/" + user,
            function (response) {
                if (response.name) {
                    factory.current_user = response;
                    callback(response);
                } else {
                    $.post(
                        "/users",
                        {name: user},
                        function (res) {
                            factory.current_user = res;
                            callback(res);
                        },
                        "json"
                    )
                }
            },
            "json"
        )
    }
    factory.getUsers = function (callback){
        $.get(
            "/users",
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    factory.updateScore = function(id, score){
        $.post(
            "/user/" + id,
            {score: score},
            function(response){
                factory.current_user = response;
            }
        )
    }
    return factory;
})

//questions factory
BlackBeltApp.factory('questionFactory', function(){
    var factory = {};
    factory.getQuestions = function (callback){
        $.get(
            "/questions",
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    factory.addQuestion = function(question){
        $.post(
            "/questions",
            question
        )
    }
    return factory;
})

//logout controller
BlackBeltApp.controller('logoutController', function(userFactory, $scope, $location){
    $scope.logout = function(){
        userFactory.currentUser = null;
        console.log("hi")
        location.reload();
    }
})

//play controller
BlackBeltApp.controller('playController', function(userFactory, questionFactory, $scope, $location){
    $scope.current_user = userFactory.current_user;
    questionFactory.getQuestions(function(questions){
        $scope.questions = questions;
        $scope.index = 0;
        if ($scope.questions.length > 1) {
            $scope.button = "Next";
        } else {
            $scope.button = "Submit";
        }
        $scope.question = $scope.questions[$scope.index];
        $scope.$apply();
    })
    $scope.answers = [];
    $scope.submit = function(){
        if ($scope.questions.length - 1 == [$scope.index++]) {
            $scope.answers.push($scope.answer);
            $scope.score = 0;
            for(var i = 0;  i < $scope.answers.length; i++){
                if ($scope.answers[i] == $scope.questions[i].answers[0].value) {
                    $scope.score ++;
                }
            }
            userFactory.updateScore($scope.current_user._id, $scope.score/$scope.questions.length);
            userFactory.flag = true;
            $location.path("/");
        } else {
            $scope.answers.push($scope.answer);
            if ($scope.questions[$scope.index + 1]) {
                $scope.button = "Next";
            } else {
                $scope.button = "Submit";
            }
            $scope.question = $scope.questions[$scope.index];
        }
    }
})

//question controller
BlackBeltApp.controller('questionController', function(questionFactory, $scope, $location){
    $scope.addQuestion = function(){
        var errors = false;
        var question = {question: $scope.question, answers: [{value: $scope.answer0, truth: true}, {value: $scope.answer1, truth: false}, {value: $scope.answer2, truth: false}]};
        if(question.question.length < 10){
            errors = true;
            $scope.error = "The question is not valid";
        }
        for (var i = 0;  i < 3; i++){
            if(question.answers[i].value.length < 1){
                errors = true;
                $scope.error = "Answers cannot be left blank";
            }
        }
        if (!errors) {
            questionFactory.addQuestion(question);
            $location.path("/");
        }
    }
})


//dashboard controller
BlackBeltApp.controller('dashboardController', function(userFactory, questionFactory, $scope){
    questionFactory.getQuestions(function(questions){
        $scope.questions = questions;
        $scope.fraction = $scope.questions.length;
        $scope.$apply();
    })
    if (!userFactory.current_user) {
        while (!current_user) {
            var current_user = prompt("Enter your name");   
        }
        userFactory.setUser(current_user, function(user){
            userFactory.getUsers(function(users){
                for(user in users){
                    users[user].fraction = users[user].score * $scope.questions.length;
                    users[user].fraction = users[user].fraction.toString() + "/" + $scope.questions.length;
                    users[user].percent = users[user].score * 100;
                    users[user].percent = users[user].percent.toString() + "%";
                }
                $scope.current_user = userFactory.current_user;
                $scope.users = users;
                $scope.$apply();
            });
        });
    } else {
        userFactory.getUsers(function(users){
            for(user in users){
                users[user].fraction = users[user].score * $scope.questions.length;
                users[user].fraction = users[user].fraction.toString() + "/" + $scope.questions.length;
                users[user].percent = users[user].score * 100;
                users[user].percent = users[user].percent.toString() + "%";
            }
            $scope.current_user = userFactory.current_user;
            $scope.users = users;
            $scope.$apply();
            if (userFactory.flag) {
                console.log($scope.current_user.score);
                if ($scope.current_user.score > .8) {
                    $("#score_good").show().delay(3000).fadeOut();
                } else {
                    $("#score_bad").show().delay(3000).fadeOut();
                }
                userFactory.flag = false;
            }
        }); 
    }
})