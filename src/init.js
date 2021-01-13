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
  });

});