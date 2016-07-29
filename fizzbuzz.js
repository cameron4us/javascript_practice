// Fizz Buzz challenge!

// I was told to give it a shot from a friend saying this was one way Major Companies
// attempt to sift through potentail candidates.

// You can attempt as well by going to http://c2.com/cgi/wiki?FizzBuzzTest

function fizzbuzz(){
  for (i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    };
  };
};
