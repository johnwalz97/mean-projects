function VehicleConstructor(name, wheels, passengers, speed) {
    var distance_travelled = 0;
    var UpdateDistanceTravelled = function() {
        distance_travelled += speed;
    }
    var obj = {
        name: name,
        wheels: wheels,
        passengers: passengers,
        speed: speed,
        makeNoise: function(){console.log("honk!")},
        move: function(){
            UpdateDistanceTravelled();
            this.makeNoise();
        },
        checkMiles(){
            console.log(distance_travelled);
        }
    }
    return obj;
}

var Bike = VehicleConstructor("Bike", 2, 1, 15);
Bike.makeNoise = function(){console.log("ring ring!")};
Bike.makeNoise();


var Sedan = VehicleConstructor("Sedan", 4, 7, 70);
Sedan.makeNoise = function(){console.log("honk honk!")};
Sedan.makeNoise();

var Bus = VehicleConstructor("Bus", 6, 0, 60);
Bus.pickUpPassengers = function(num){Bus.passengers+= num};
Bus.pickUpPassengers(5);
console.log(Bus.passengers);