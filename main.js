// main.js
//
// Author: blinklv <blinklv@icloud.com>
// Create Time: 2017-08-18
// Maintainer: blinklv <blinklv@icloud.com>
// Last Change: 2017-08-24

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

  // Rounded Rect
  (function() {
    function roundedRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x, y + r);
      ctx.lineTo(x, y + h - r);
      ctx.arcTo(x, y + h, x + r, y + h, r);
      ctx.lineTo(x + w - r, y + h);
      ctx.arcTo(x + w, y + h, x + w, y + h - r, r);
      ctx.lineTo(x + w, y + r);
      ctx.arcTo(x + w, y, x + w - r, y, r);
      ctx.lineTo(x + r, y);
      ctx.arcTo(x, y, x, y + r, r);
      ctx.stroke();
    }

    var ctx = document.getElementById("rounded-rect").getContext("2d");
    roundedRect(ctx, 50, 100, 200, 100, 10);
    roundedRect(ctx, 300, 50, 100, 200, 20);
  })();

  // Path2D example 
  (function() {
    var rectangle = new Path2D();
    rectangle.rect(20, 20, 100, 50);

    var circle = new Path2D();
    circle.arc(150, 150, 50, 0, 2 * Math.PI);

    var triangle = new Path2D();
    triangle.moveTo(300, 50);
    triangle.lineTo(200, 200);
    triangle.lineTo(400, 200);
    triangle.closePath();
    
    var ctx = document.getElementById("path2d-example").getContext("2d");
    ctx.stroke(rectangle);
    ctx.fill(circle);
    ctx.stroke(triangle);
  })();

  // Rectangle Grid
  (function() {
    var ctx = document.getElementById("rectangle-grid").getContext("2d");
    for ( let i = 0; i < 10; ++i ) {
      for ( let j = 0; j < 10; ++j ) {
        ctx.fillStyle = "rgb(" + Math.floor(255 - 25 * i) + "," + 
          Math.floor(255 - 25 * j) + ", 0)";
        ctx.fillRect(114 + j * 25, 25 + i * 25, 25, 25);
      }
    }
  }) ();
})();




