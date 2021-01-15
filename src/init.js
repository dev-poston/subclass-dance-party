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















  // var getLocation = function(danceTeam) {
  //   var target = {};

  //   for (var i = 0; i < danceTeam.length; i++) {
  //     var d = danceTeam[i];
  //     if (d.$node[0].className === 'oneAnimal') {
  //       target = d;
  //       console.log(target);

  //       console.log('woot');
  //       continue;
  //     }
  //     var t = d.top;
  //     var l = d.left;
  //     if (target) {
  //       target.detectCollision(t, l);
  //       console.log(target);
  //     }
  //   }
  // };

  // setInterval(() => {
  //   getLocation(window.dancers);
  //   console.log('yay');
  // }, 1000);

});