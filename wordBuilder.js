var wordBuilder = function(word) {
    this.word = word;
    this.letters = function() {
        var pushLetters = '';
        for (let i = 0; i < word.length; i++) {
            pushLetters += word[i] + ' ';
        }
        return pushLetters;
    }
}

var blankBuilder = function(word) {
    this.word = word;
    this.letters = function() {
        var pushLetters = '';
        for (let i = 0; i < word.length; i++) {
            pushLetters += '_ ';
        }
        return pushLetters;
    }
}
var compRepl = function(c, word, blWord) {

    for (let i = 0; i < word.length; i++) {
        if (c == word[i]) {

            blWord[i] = c;
        } else if (word[i] == ' ') {
           blWord[i] = ' ';
        } else { blWord[i]= '_'; }

    }
    console.log(blWord);
}


module.exports = {
    wordBuilder: wordBuilder,
    blankBuilder: blankBuilder,
    compRepl: compRepl
}