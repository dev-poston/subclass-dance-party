var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).append('<img src="ravekat.gif" style="width:150px;height:200px;"/>');

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {

  var oldStep = MakeDancer.prototype.step.bind(this);
  oldStep();
  this.$node.toggle();
};