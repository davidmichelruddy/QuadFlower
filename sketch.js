var foo;
var numLeaves = 200;
var leaves = [];

function setup() {
 createCanvas(windowWidth, windowHeight);
 ellipseMode(CENTER);
 angleMode(DEGREES);
 for (var i = 0; i < numLeaves; i++) {
  var leaf = new Particle(height/3);
  leaves.push(leaf);
 }
 translate(width/2,height/2);
 for (var j = 0; j < leaves.length; j++) {
   leaves[j].show();
  }
  ellipse(0,0,20,20);
}

function draw() {

  // beginShape();
  // vertex(0, 0);
  // bezierVertex(random(100), 0, random(100), random(100), random(100), random(100));
  // bezierVertex(random(100), random(100), random(100), random(100), 0, 0);
  // endShape();
}