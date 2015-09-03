var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var pitch = new five.Led(10);
  var relay = new five.Relay(9)
      // relay.close();

  var delay = 250;
  var bar = 16;
  var noteIndex = 0;

  var pA = [0, 1, 2, 3, 4, 5, 6, 7,
            0, 1, 2, 3, 4, 5, 6, 7];

  var pB = [0, 2, 2, 6, 0, 2, 2, 6,
            0, 4, 3, 7, 0, 2, 2, 6 ];

  var pC = [4, 3, 2, 5, 4, 3, 3, 3,
            4, 3, 2, 5, 1, 1, 2, 5 ];

  var pD = [1, 2, 5, 3, 1, 0, 0, 3,
            1, 2, 5, 3, 1, 2, 5, 3 ];

  var pE = [6, 2, 6, 2, 6, 2, 0, 2,
            5, 1, 5, 1, 5, 1, 0, 1 ];

  var pF = [0, 2, 0, 2, 0, 2, 0, 2,
            0, 0, 0, 2, 0, 4, 0, 4 ];

  var currentPatern = pA;

  (function playNote () {
     setTimeout(function () {
        if(currentPatern[noteIndex] === 0) {
          // relay.close();
          pitch.brightness(currentPatern[noteIndex] * 255 / 7);
        } else {
          // relay.open();
          pitch.brightness(currentPatern[noteIndex] * 255 / 7);
        }

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
    pA: function() { currentPatern = pA; return currentPatern; },
    pB: function() { currentPatern = pB; return currentPatern; },
    pC: function() { currentPatern = pC; return currentPatern; },
    pD: function() { currentPatern = pD; return currentPatern; },
    pE: function() { currentPatern = pE; return currentPatern; },
    pF: function() { currentPatern = pF; return currentPatern; },
    pattern: function(newPattern) {currentPatern = newPattern; return currentPatern; }
  });
});