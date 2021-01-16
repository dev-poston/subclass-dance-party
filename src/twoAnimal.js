var TwoAnimal = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).append('<img src="corgbutt.gif" style="width:150px;height:150px;"/>');

};

TwoAnimal.prototype = Object.create(MakeDancer.prototype);

TwoAnimal.prototype.constructor = TwoAnimal;

TwoAnimal.prototype.step = function() {

  this.$node.removeClass('dancer').addClass('twoAnimal animate__animated animate__bounce');

  this.$node.mouseover(function () {
    $(this).css('cursor', 'pointer');
    $(this).animate({ width: '300px' }, 'fast');
    $(this).animate({ height: '300px' }, 'fast');
  });

  this.$node.mouseout(function () {
    $(this).animate({ width: '150px' }, 'slow');
    $(this).animate({ height: '150px' }, 'slow');
  });

  var newTop = Math.random() * 500;
  var newLeft = Math.random() * 500;

  var styleSettings = {

    top: newTop,
    left: newLeft,
  };

  this.$node.animate(styleSettings);
};
