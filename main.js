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

  // Two triangles
  (function() {
    var ctx = document.getElementById("two-triangles").getContext("2d");
    
    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(129, 36);
    ctx.lineTo(329, 36);
    ctx.lineTo(129, 236);
    ctx.fill();

    // Stroke triangle
    ctx.beginPath();
    ctx.moveTo(339, 46);
    ctx.lineTo(339, 246);
    ctx.lineTo(139, 246);
    ctx.closePath();
    ctx.stroke();

  })();

  // Arcs
  (function() {
    var ctx = document.getElementById("arcs").getContext("2d");
    var [r, theta] = [30, Math.PI / 4];
    for ( let i = 0; i < 4; ++i ) {
      for ( let j = 0; j < 6; ++j ) {
        var [x, y, end] = [60 + j * 70, 40 + i * 70, theta * (j+1)];
        ctx.beginPath();
        ctx.arc(x, y, r, 0, end, i % 2 !== 0);


        if ( i > 1 ) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  })();

})();




