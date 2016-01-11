var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

    // Create a new `joystick` hardware instance.
    var joystick = new five.Joystick({
        //   [ x, y ]
        pins: ["A0", "A1"]
    });
  
    function readJoy() {
        console.log("  x : ", joystick.x + .000956947162426559);
        console.log("  y : ", joystick.y);
    }
    
    setInterval(readJoy, 500)
});