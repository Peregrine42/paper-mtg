"use strict";

setup = function() {
  let canvas = document.getElementById('my_canvas');
  paper.setup(canvas);
  let path = new paper.Path();
  path.strokeColor = 'black';
  let start = new paper.Point(100, 100);
  path.moveTo(start);
  path.lineTo(start.add([ 200, -50]));
  paper.view.draw();
}

window.onload = setup;
