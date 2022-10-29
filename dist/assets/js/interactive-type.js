let gridSize = 3.5;
let points = [];
let font;

function preload() {
  font = 'monospace';
}

function setup() {
  var container = document.getElementById('interactive-type');
  let canvas = createCanvas(container.offsetWidth, container.offsetHeight);
  canvas.parent("interactive-type");

  background(255);
  textFont(font);
  textSize(225);
  textAlign(CENTER, CENTER);
  fill(0);
  noStroke();
  text('數位', width/2,height/2);

  loadPixels();
  for (let y = 0; y < height; y += gridSize) {
    for (let x = 0; x < width; x += gridSize) {
      let r = get(x, y)[0];
      if (r < 128) {
        points.push(createVector(x,y));
      }
    }
  }
}

function draw() {
  background(255);

  let mutationAmt = map(mouseX, 0, width/2, -15, 15, true);

  for (let i = 0; i < points.length; i++) {
    let x = points[i].x;
    let y = points[i].y;
    x += random(-mutationAmt,mutationAmt);
    y += random(-mutationAmt,mutationAmt);

    stroke(0);
    noFill();
    square(x+2,y+2, gridSize);
  }
}

