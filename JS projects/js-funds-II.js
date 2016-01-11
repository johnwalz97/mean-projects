//standalone functions
function sum(first, second) {
    var sum = first;
    for (var i = first + 1; i <= second; i++){
        sum += i;
    }
    console.log(sum);
}

function min_val(arr){
    var min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function average(arr) {
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}



//anonymous functions assigned to variables
var sum = function (first, second) {
    var sum = first;
    for (var i = first + 1; i <= second; i++){
        sum += i;
    }
    console.log(sum);
}

var min_val = function (arr){
    var min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

var average = function (arr) {
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}


//functions as methods of an object
var obj = {
    sum: function (first, second) {
        var sum = first;
        for (var i = first + 1; i <= second; i++){
            sum += i;
        }
        console.log(sum);
    },
    
    min_val: function (arr){
        var min = arr[0];
        for (var i = 1; i < arr.length; i++){
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    },
    
    average: function (arr) {
        var sum = arr[0];
        for (var i = 1; i < arr.length; i++){
            sum += arr[i];
        }
        return sum/arr.length;
    }
}


//person object
var person = {
    name: 'John',
    distance_travelled: 0,
    say_name: function(){console.log(this.name)},
    say_something: function(str){console.log(this.name+" says "+str)},
    walk: function(){alert(this.name+" is walking"); this.distance_travelled += 3},
    run: function(){alert(this.name+" is running"); this.distance_travelled += 10},
    crawl: function(){alert(this.name+" is crawling"); this.distance_travelled += 1}
}

person.run();
person.say_something('I am tired!');
person.say_name();