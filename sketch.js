var shapes = [];
var r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(100);
  for (var i = 0; i < r; i++) {
    var s = new Shape();
    shapes.push(s);
  }
  translate(windowWidth/2, windowHeight/2);
  shapes.forEach(function(shape, i){
    push();
    fill(...shape.c);
    shape.make();
    pop();
    rotate(TWO_PI * i /shapes.length);
  });
  ellipse(0, 0, 20, 20);
}

function draw() {
}

function Shape() {
  this.vals = [],
  this.c = [random(255),random(255),random(255),random(255)],

  this.fillVals = function() {
    for (var i = 0; i < 6; i++) {
      this.vals.push(random(300));
    };
  },

  this.make = function() {
    quad(0,0, ...this.vals);
  },

  this.fillVals();
}