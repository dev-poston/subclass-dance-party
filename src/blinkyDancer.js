var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  MakeDancer.call(this, top, left, timeBetweenSteps); //heritable stuff from Dancer
  //should step be on this list? hunch = no we agree

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //how to reference the fact that MakeDancer.step is accessible on this constructor prototype

  //can you use var here?
  //how to define oldStep
  //var oldStep = this.step;
  //this.step();
  //what hack reactor gave us
  // var oldStep = blinkyDancer.step;
  //var oldStep = MakeBlinkyDancer.step; //update this line

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

  //return blinkyDancer;
  // oldStep();
  //this.step();
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = MakeDancer.prototype.step.bind(this);
  //this.oldStep().bind(this);
  //what HR gave us:
  oldStep();

  // Object.getPrototypeOf(MakeBlinkyDancer.prototype).oldStep(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

// var a = new MakeBlinkyDancer(50, 100, 1000);
// console.log(a);