// INTERACTIVE TYPE
const interactiveTypeBlack = (p) => {
  let gridSize = 5;
  const points = [];
  let mutationRange = [-70, 70];
  const initialMutationLowerBound = mutationRange[0];

  p.preload = function() {
    font = 'monospace';
  }

  p.setup = function() {
    var container = document.getElementById('interactive-type');
    p.createCanvas(container.offsetWidth, container.offsetHeight);

    p.background(0);
    p.textFont(font);
    p.textSize(p.width / 4);
    p.textAlign(p.CENTER, p.CENTER);
    p.fill(255);
    p.text('數位', p.width/2, p.height/2);
    p.frameRate(60);

    p.loadPixels();
    for (let y = 0; y < p.height; y += gridSize) {
      for (let x = 0; x < p.width; x += gridSize) {
        let r = p.get(x, y)[0];
        if (r > 128) {
          points.push(p.createVector(x,y));
        }
      }
    }
  }

  p.draw = function() {
    p.background(0);

    count = 0;
    for (let i = 0; i < points.length; i++) {
      let x = points[i].x;
      let y = points[i].y;
      x += p.random(mutationRange[0], mutationRange[1]) * p.random(1.5);
      y += p.random(mutationRange[0], mutationRange[1]) * p.random(1.5);

      p.stroke(255);
      p.fill(0);
      p.circle(x, y, gridSize/2);
    }
  }

  p.mouseWheel = function(event) {
    if (event.delta > 0 && mutationRange[0] < 0) {
      mutationRange = [mutationRange[0] + 1, mutationRange[1] - 1];
      gridSize += 0.1;
    } 
    if (event.delta < 0 && gridSize > 1 && mutationRange[0] > initialMutationLowerBound) {
      mutationRange = [mutationRange[0] - 1, mutationRange[1] + 1];
      gridSize -= 0.1;
    }
  }

  p.windowResized = function() {
    p.resizeCanvas(document.getElementById('interactive-type').offsetWidth, document.getElementById('interactive-type').offsetHeight);
  }
}

let interactiveTypeSketch = new p5(interactiveTypeBlack, 'interactive-type');