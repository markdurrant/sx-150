var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var pitch = new five.Led(10);
  var relay = new five.Relay(9)
      relay.close();

  var noteIndex = 0;

  var tune = [0, 50, 0, 100, 0, 150, 0, 200, 0, 250];

  this.repl.inject({
    p1: [0, 50, 0, 100, 0, 150, 0, 200, 0, 250],
    p2: [0,250],
    p3: [0,0,0,0,250],
    play: function(tempo, pattern) {
      board.loop(tempo, function() {
        pitch.brightness(pattern[noteIndex]);

        if (tune[noteIndex] === 0) {
          relay.close();
        } else {
          relay.open();
        }

        noteIndex += 1;
        if (noteIndex >= tune.length) {
          noteIndex = 0;
        }
      });
    }
  });
});