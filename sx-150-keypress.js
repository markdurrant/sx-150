var five = require("johnny-five");
var keypress = require("keypress");
var board = new five.Board();

board.on("ready", function() {
  var pitch = new five.Led(10);
  var relay = new five.Relay(9)
      // relay.close();

  keypress(process.stdin);

  process.stdin.on("keypress", function(ch, key) {
    if(key && key.name === 'q'){
      pitch.brightness(0);
    }

    if(key && key.name === 'w'){
      pitch.brightness(50);
    }

    if(key && key.name === 'e'){
      pitch.brightness(100);
    }

    if(key && key.name === 'r'){
      pitch.brightness(150);
    }

    if(key && key.name === 't'){
      pitch.brightness(200);
    }

    if(key && key.name === 'y'){
      pitch.brightness(250);
    }

  });

  process.stdin.setRawMode(true);
  process.stdin.resume();
});