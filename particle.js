var Particle = function(size) {
  this.x1 = random(size);
  this.y1 = random(size);
  this.x2 = random(size);
  this.y2 = random(size);
  this.x3 = random(size);
  this.y3 = random(size);
  this.x4 = random(size);
  this.y4 = random(size);
  this.x5 = random(size);
  this.y5 = random(size);
  this.a = random(360);
  this.col = [random(155)+100,random(155)+100,random(155)+100,220];
};

Particle.prototype.show = function() {
  push();
  rotate(this.a);
  fill(...this.col);
  beginShape();
  vertex(0, 0);
  bezierVertex(this.x1, this.x1, this.x2, this.y2, this.x3, this.x3);
  bezierVertex(this.x4, this.y4, this.x5, this.x5, 0, 0);
  endShape();
  pop();
};