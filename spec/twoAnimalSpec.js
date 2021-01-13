describe('twoAnimal', function() {

  var twoAnimal, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    twoAnimal = new TwoAnimal(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(twoAnimal.$node).to.be.an.instanceof(jQuery);
  });

  it('should grow and shrink in size', function() {
    //store its x/y
    //run move function
    //compare stored x/y with current x/y
  });

});
