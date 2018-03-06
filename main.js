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


// Challenge 2
var domString;
function challenge2(num) {
  var testResults = [];
  for(var i = 2; i < num; i++) {
    if(num % i === 0) {
      testResults.push(false);
      break;
    } else {
      testResults.push(true);
      break;
    };
  };
  if (num % 2 === 0) {
    testResults.push(true);
  } else {
    testResults.push(false);
  };
  if (num % 10 === 0) {
    testResults.push(true);
  } else {
    testResults.push(false);
  };
  domString = testResults;
};

challenge2(7);
writeToDom(domString, 'challenge-2');

challenge2(10);
writeToDom(domString, 'challenge-2');

// Challenge 3

var array = [ 1, 2, 3];
function challenge3(arr) {
  function getUnique(value, index, self) {
    return self.indexOf(value) === index;
  };
  var unique = arr.filter(getUnique);
  var uniqueSum;
  for (var i=0, uniqueSum=0; i<unique.length; uniqueSum += unique[i++]) {
  };
  domString = uniqueSum;
  return domString;
};

challenge3(array);
writeToDom(domString, 'challenge-3');

var array = [ 1, 3, 8, 1, 8];
challenge3(array);
writeToDom(domString, 'challenge-3');

var array = [ -1, -1, 5, 2, -7];
challenge3(array);
writeToDom(domString, 'challenge-3');

// Challenge 4

var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
var birds1 = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];

function challenge4(arr) {
  for (var j=0; j<geese.length; j++) {
    for (var i=0; i<arr.length; i++) {
      if (arr[i].includes(geese[j])) {
        arr.splice(i, 1);
      };
    };
  };
  domString = arr;
  return arr;
};
challenge4(birds1);
writeToDom(domString, 'challenge-4');