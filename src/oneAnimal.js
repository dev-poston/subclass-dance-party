var OneAnimal = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.className = 'oneAnimal';

};

OneAnimal.prototype = Object.create(MakeDancer.prototype);

OneAnimal.prototype.constructor = OneAnimal;

OneAnimal.prototype.step = function(x, y) {

  var oldStep = MakeDancer.prototype.step.bind(this);
  oldStep();

  if (x && y) {
    if (Math.abs(x.top - y.top) < 100 || Math.abs(x.left - y.left) < 100) {
      console.log('COLLISIONS!!!!!!!!!!!');
      this.$node.removeClass('oneAnimal').addClass('animate__animated animate__bounce');
      var styleSettings = {
        top: this.top += 200,
        left: this.left += 200
      };
      this.$node.animate(styleSettings);
    }
  } else {
    var newTop = Math.random() * 200;
    var newLeft = Math.random() * 200;

    var styleSettings = {
      top: newTop,
      left: newLeft
    };

    this.$node.animate(styleSettings);
  }

};

// OneAnimal.prototype.loc = function(x, y) {
//x = oneAnimal
//y = other
// console.log('b4 c: ', this.top);
// console.log('b4 c: ', this.left);
// console.log('xloc', x);
// console.log('yloc', y);
// //compare x and y (objs that store current top and left)
// if (Math.abs(x.top - y.top) < 100 || Math.abs(x.left - y.left) < 100) {
//   //increment x's top/left by 100
//   console.log('COLLISIONS!!!!!!!!!!!');
//   //should be relocating instance on DOM
//   this.top += 800;
//   console.log('after c: ', this.top);
//   this.left += 800;
//   console.log('after c: ', this.left);
//   var styleSettings = {
//     color: 'yellow',
//   };

//   this.$node.animate(styleSettings);
// }
//check for overlapping within a range
//if they are ever within 100 of each other
//take x and increment its left by 100


//massage in position here:
// $('.oneAnimal').position({
//   my: 'right+250',
//   of: '.dancer',
//   collision: 'flipfit'
// });
// var styles = {
//   color: 'yellow'
// };
// $('.oneAnimal').css(styles);
// };

