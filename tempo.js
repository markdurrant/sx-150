var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(10);
  var delay = 500;
  var bar = 16;
  var i = 0;


  var pA = [0, 100, 0, 100,
            0, 100, 0, 100,
            0, 100, 0, 100,
            0, 100, 0, 100 ];

  var pB = [0, 100, 100, 100,
            0, 100, 100, 100,
            0, 100, 100, 100,
            0, 100, 100, 100 ];

  var currentPatern = pA;

  (function myLoop () {
     setTimeout(function () {
        led.brightness(currentPatern[i]);
        i++;
        if (i >= bar) {
          i = 0;
        }
        myLoop();
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