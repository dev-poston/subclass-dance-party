var OneAnimal = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
};

OneAnimal.prototype = Object.create(MakeDancer.prototype);

OneAnimal.prototype.constructor = OneAnimal;

OneAnimal.prototype.step = function() {

  var oldStep = MakeDancer.prototype.step.bind(this);
  oldStep();

  var newTop = Math.random() * 500;
  var newLeft = Math.random() * 500;

  var styleSettings = {
    top: newTop,
    left: newLeft
  };

  this.$node.animate(styleSettings);
};

OneAnimal.prototype.detectCollision = function(x, y) {
  var mathz = Math.sqrt(Math.pow(top, x) + Math.pow(left, y));
  console.log(mathz);
};

