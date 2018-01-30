var inquirer = require('inquirer');

var wordCreator = function(word) {
    this.word = word;
    this.blankWord = '';
    this.letters = function() {
        var pushLetters = '';
        for (let i = 0; i < word.length; i++) {
            pushLetters += word[i] + ' ';
        }
        return pushLetters;
    };
    this.blanks = function() {
        var pushBlanks = '';
        for (let i = 0; i < word.length; i++) {
            pushBlanks += '_ ';
        }
        console.log(pushBlanks);
    }
    this.checkLetter = function() {
        var wordWithBlanks = this.letters();
        var justBlanks = '';
        console.log(justBlanks);
        var runGame = function() {
            inquirer.prompt([{
                type: 'input',
                message: 'Guess a letter',
                name: 'letter'
            }]).then(function(mess) {
                var c = mess.letter;
                for (let i = 0; i < wordWithBlanks.length; i++) {
                    if (wordWithBlanks.charAt(i) == c) {
                        justBlanks.charAt(i)=c;
                    } else if (wordWithBlanks[i] == ' ') {
                        justBlanks.charAt(i)= ' ';
                    } else{justBlanks.charAt(i)='_'}
                }
                console.log(justBlanks);
            runGame();
            })
            
        }
        runGame();
    }
}

module.exports = wordCreator;