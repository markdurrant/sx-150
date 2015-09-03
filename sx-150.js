var five = require("johnny-five");
var board = new five.Board();

var tune = [0, 50, 0, 100, 0, 150, 0, 200, 0, 250];

board.on("ready", function() {
  var noise = new five.Led(10);
  var n = 0;

  var relay = new five.Relay(9)
      relay.close();

  this.loop(500, function() {
    console.log(n, tune[n]);

    noise.brightness(tune[n]);

    if (tune[n] === 0) {
      relay.close();
    } else {
      relay.open();
    }

    n += 1;

    if (n >= tune.length) {
      n = 0;
    }
  });
});