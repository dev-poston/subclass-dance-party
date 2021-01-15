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
    sinon.spy(twoAnimal.$node, 'mouseover');
    twoAnimal.step();
    expect(twoAnimal.$node.mouseover.called).to.be.true;
  });
});
