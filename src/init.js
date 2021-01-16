$(document).ready(function() {

  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var snazzyDancer = event.target.innerHTML;

    var snazzyDancers = {
      'add an OG dancer': 'MakeDancer',
      'add a blinky dancer': 'MakeBlinkyDancer',
      'add an animal 1': 'OneAnimal',
      'add an animal 2': 'TwoAnimal'
    };

    var currentDancer = snazzyDancers[snazzyDancer];
    var dancerMakerFunctionName = $(this).data(currentDancer);
    var dancerMakerFunction = window[currentDancer];

    var dancer = new dancerMakerFunction (
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.line').on('click', function(event) {

    let top = 500;
    let left = 100;

    window.dancers.forEach(dancer => {
      left += 50;
      dancer.lineUp(top, left);
    });
  });

  //"#position4" should be class oneanimal = .oneAnimal
  //"#position1" target OGDancer - .dancer

  //iterate over window.dancers and look to see if oneAnimal is presen

  var move = function() {
    var target = 'oneAnimal';
    var t;
    for (let i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].$node.className === 'oneAnimal') {
        t = window.dancers[i];
        var targetLoc = t.$node.offset();
        continue;
      } else {
        var other = window.dancers[i];
        var otherLoc = other.$node.offset();
        // console.log(targetLoc);
        // console.log(otherLoc);
        if (t) {
          // t.loc(targetLoc, otherLoc);
          t.step(targetLoc, otherLoc);
        }
      }
    }
  };

  setInterval(()=> {
    move();
  }, 100);

});