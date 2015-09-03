var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var pitch = new five.Led(10);
  var relay = new five.Relay(9)
      relay.close();

  var delay = 500;
  var bar = 16;
  var noteIndex = 0;

  var pA = [0, 100, 0, 100,
            0, 100, 0, 100,
            0, 100, 0, 100,
            0, 100, 0, 100 ];

  var pB = [0, 100, 100, 100,
            0, 100, 100, 100,
            0, 100, 100, 100,
            0, 100, 100, 100 ];

  var currentPatern = pA;

  (function playNote () {
     setTimeout(function () {
        if(currentPatern[noteIndex] === 0) {
          relay.close();
        } else {
          relay.open();
        }

        pitch.brightness(currentPatern[noteIndex]);

        noteIndex++;
        if (noteIndex >= bar) {
          noteIndex = 0;
        }

        playNote();
     }, delay)
  })();

  this.repl.inject({
    tempo: function(setDelay) {
      delay = setDelay;
      return delay;
    },
    pA: function() {
      currentPatern = pA;
      return currentPatern;
    },
    pB: function() {
      currentPatern = pB;
      return currentPatern;
    }
  });
});