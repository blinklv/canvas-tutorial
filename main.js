// main.js
//
// Author: blinklv <blinklv@icloud.com>
// Create Time: 2017-08-18
// Maintainer: blinklv <blinklv@icloud.com>
// Last Change: 2017-08-21

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

})();




