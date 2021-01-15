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

});

//TASK:
// Make a button that, when clicked, tells all the dancers to line up against one side of the dance floor. Remember you've got a global array of all created dancers (it's defined in src/init.js) so you can loop through that array and tell each object to lineUp. You'll need to add a lineUp method to each of your dancer types - they don't all have to do exactly the same thing.