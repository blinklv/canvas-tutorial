// main.js
//
// Author: blinklv <blinklv@icloud.com>
// Create Time: 2017-08-18
// Maintainer: blinklv <blinklv@icloud.com>
// Last Change: 2017-08-22

(function() {
  hljs.initHighlightingOnLoad();

  // Two intersecting rectangles.
  (function() {
    var canvas = document.getElementById("two-intersecting-rectangles");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(50, 50, 150, 150);
    
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(100, 100, 150, 150);
  })();

  // Nested square
  (function() {
    var ctx = document.getElementById("nested-square").getContext("2d");
    var [ox, oy, len ] = [ 139, 46, 200 ];

    for ( let i = 0 ; len > 0; len -= 20, i = (i+1) % 3 ) {
      switch (i) {
        case 0:
          ctx.fillRect(ox, oy, len, len);
          break;
        case 1:
          ctx.clearRect(ox, oy, len, len);
          break;
        case 2:
          ctx.strokeRect(ox, oy, len, len);
          break;
      }
      [ox, oy] = [ox + 10, oy + 10];
    }
  })();

})();




