var OneAnimal = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.className = 'oneAnimal';
  $(this.$node).append('<img src="butterfly.gif"/>');

};

OneAnimal.prototype = Object.create(MakeDancer.prototype);

OneAnimal.prototype.constructor = OneAnimal;

OneAnimal.prototype.step = function(x, y) {

  var oldStep = MakeDancer.prototype.step.bind(this);
  oldStep();

  if (x && y) {
    if (Math.abs(x.top - y.top) < 100 || Math.abs(x.left - y.left) < 100) {
      console.log('COLLISIONS!!!!!!!!!!!');
      $('#fart')[0].play();
      this.$node.removeClass('oneAnimal').addClass('animate__animated animate__bounce');
      var styleSettings = {
        top: this.top += 200,
        left: this.left += 200
      };
      this.$node.animate(styleSettings);
    }
  } else {
    var newTop = Math.random() * 200;
    var newLeft = Math.random() * 200;

    var styleSettings = {
      top: newTop,
      left: newLeft
    };

    this.$node.animate(styleSettings);
  }

};

