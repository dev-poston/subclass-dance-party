var OneAnimal = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

};

OneAnimal.prototype = Object.create(MakeDancer.prototype);

OneAnimal.prototype.constructor = OneAnimal;


