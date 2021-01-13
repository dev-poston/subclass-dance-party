var TwoAnimal = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

};

TwoAnimal.prototype = Object.create(MakeDancer.prototype);

TwoAnimal.prototype.constructor = TwoAnimal;

TwoAnimal.prototype.step = function() {

  this.$node.removeClass('dancer').addClass('twoAnimal animate__animated animate__bounce');

  //add shirk/grow on mouseover
  this.$node.mouseover(function () {
    $(this).css('cursor', 'pointer');
    $(this).animate({ width: '500px' }, 'slow');
    $(this).animate({ height: '500px' }, 'slow');
  });

  this.$node.mouseout(function () {
    $(this).animate({ width: '200px' }, 'slow');
    $(this).animate({ height: '200px' }, 'slow');
  });

  var newTop = Math.random() * 500;
  var newLeft = Math.random() * 500;

  var styleSettings = {
    top: newTop,
    left: newLeft,

  };

  this.$node.animate(styleSettings);

};
