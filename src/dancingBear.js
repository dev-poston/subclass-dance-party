var MakeBear = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).append('<img src="bear.gif" style="width:350px;height:600px;"/>');

};

MakeBear.prototype = Object.create(MakeDancer.prototype);

MakeBear.prototype.constructor = MakeBear;

MakeBear.prototype.step = function() {

  var oldStep = MakeDancer.prototype.step.bind(this);
  oldStep();

  //this.$node.toggle();
};