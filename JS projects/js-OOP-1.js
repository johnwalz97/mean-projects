function VehicleConstructor(name, wheels, passengers) {
    var obj = {
        name: name,
        wheels: wheels,
        passengers: passengers,
        makeNoise: function(){}
    }
    return obj;
}

var Bike = VehicleConstructor("Bike", 2, 1);
Bike.makeNoise = function(){console.log("ring ring!")};
Bike.makeNoise();

var Sedan = VehicleConstructor("Sedan", 4, 7);
Sedan.makeNoise = function(){console.log("honk honk!")};
Sedan.makeNoise();

var Bus = VehicleConstructor("Bus", 6, 0);
Bus.pickUpPassengers = function(num){Bus.passengers+= num};
Bus.pickUpPassengers(5);
console.log(Bus.passengers);