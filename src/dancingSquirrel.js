var MakeSquirrel = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).append('<img src="squirrel.gif" style="width:100px;height:100px;"/>');

};

MakeSquirrel.prototype = Object.create(MakeDancer.prototype);

MakeSquirrel.prototype.constructor = MakeSquirrel;

MakeSquirrel.prototype.step = function() {

  var oldStep = MakeDancer.prototype.step.bind(this);
  oldStep();

  this.$node.effect('shake');
};