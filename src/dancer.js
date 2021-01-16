// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  //$(this.$node).append('<img src="bear.gif"/>');

  this.step();
  this.setPosition(this.top, this.left);
};

MakeDancer.prototype.step = function() {

  setTimeout(() => {
    this.step();
  }, this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUp = function(newTop, newLeft) {

  var styleSettings = {
    top: newTop,
    left: newLeft
  };

  this.$node.css(styleSettings);
};

MakeDancer.prototype.rotateDancer = function() {
  let count = 0;

  while (count < 4) {
    this.$node.toggleClass('flip');
  }

  $('#line').on('click', function(event) {
    this.dispese();
  });

};

MakeDancer.prototype.disperse = function() {
  let newTop = this.top * Math.random();
  let newLeft = this.left * Math.random();
  this.setPostion(newTop, newLeft);
};