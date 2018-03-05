function writeToDom(domString, domId) {
    document.getElementById(domId).innerHTML += '<p>' + domString + '</p>';
  };
writeToDom("I go in div#2", "challenge-2");

