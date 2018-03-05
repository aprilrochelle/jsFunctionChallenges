// function writeToDom(domString, domId) {
//     document.getElementById(domId).innerHTML += '<p>' + domString + '</p>';
//   };
// writeToDom("I go in div#2", "challenge-2");

// Challenge 1

var difference;
var domString;
function challenge1(year1, futureYear) {
  difference = futureYear - year1;
  if ((futureYear - year1) > 0) {
    domString = 'You are ' + difference + ' years old.';
  } else if ((futureYear - year1) < 0) {
    domString = 'You will be born in ' + (-1 * difference) + ' years.';
  } else {
    domString = 'You were born this very year!';
  };
};
challenge1(2000, 2010);
function writeToDom(domString, domId) {
    document.getElementById(domId).innerHTML += '<p>' + domString + '</p>';
  };
writeToDom(domString, 'challenge-1');

challenge1(2000, 1995);
writeToDom(domString, 'challenge-1');

challenge1(2000, 2000);
writeToDom(domString, 'challenge-1');