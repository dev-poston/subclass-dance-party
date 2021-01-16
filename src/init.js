// remove borders from gif
// limit area of gifs
// fix top bar
// resize smaller gifs
// squirrel goes back to top left every time


$(document).ready(function() {

  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    if ( window.dancers.length === 0) {
      $('#audio')[0].play();
    }

    var snazzyDancer = event.target.innerHTML;

    var snazzyDancers = {
      'add disco kat': 'MakeBlinkyDancer',
      'add butterfly': 'OneAnimal',
      'add corgi': 'TwoAnimal',
      'add bear': 'MakeBear',
      'add squirrel!': 'MakeSquirrel'
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

  $('#line').on('click', function(event) {

    let top = 500;
    let left = 100;

    window.dancers.forEach(dancer => {
      left += 50;
      dancer.lineUp(top, left);
    });
  });

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
        if (t) {
          t.step(targetLoc, otherLoc);
        }
      }
    }
  };

  setInterval(()=> {
    move();
  }, 100);

});