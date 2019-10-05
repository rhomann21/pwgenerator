var pw = [];
var letters = ['a', 'b', 'c', 'd', 'e', 'f'];
var symbols = ['!', '@', '#', '$'];
var pwLen = prompt('What is you password length?');
var isSymbols = true;
var isNumbers = true;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

/* defined function */
function createPassword() {
    for (i = 0; i < pwLen; i++) {
        if (isSymbols === true && i === 0) {
            var randomSymNo = Math.floor(Math.random() * symbols.length);
            /* inject a symbol in the string */
            pw.push(symbols[randomSymNo]);
        } else if (isNumbers === true && i === 1) {
            var randomNo = Math.floor(Math.random() * 10);
            pw.push(randomNo);
        } else {
            /* inject a letter into the string */
            var randomLet = Math.floor(Math.random() * letters.length);
            pw.push(letters[randomLet]);
        }
    }
    /* randomize array */
    pwShuffle = shuffle(pw);
    pwBox.innerHTML = pwShuffle.join('');
};

function myFunction() {
      var copyText = document.getElementById("pwInput");
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");
      alert("Copied the text: " + copyText.value);
    }