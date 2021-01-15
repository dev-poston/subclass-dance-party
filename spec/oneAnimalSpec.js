describe('oneAnimal', function() {

  var oneAnimal, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    oneAnimal = new OneAnimal(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(oneAnimal.$node).to.be.an.instanceof(jQuery);
  });

  it('should move around the page', function() {
    sinon.spy(oneAnimal, 'step');
    expect(oneAnimal.$node.top).to.not.equal(10);
    expect(oneAnimal.$node.left).to.not.equal(20);
  });
});
