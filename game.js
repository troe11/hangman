var inquirer = require('inquirer');

var wordFile = require('./wordBuilder.js');
var wordBuilder = wordFile.wordBuilder;
var blankBuilder = wordFile.blankBuilder;
var compRpl = wordFile.compRepl;

var swNames = ['Chewy', 'Luke', 'Han', 'Leia', 'Anakin', 'R2D2', 'Rey', 'Fynn'];

var randoWord = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

var newWord = randoWord(swNames);

var currentWord = new wordBuilder(newWord);
var newBlank = new blankBuilder(newWord);
var word = currentWord.letters();
var blankWord = newBlank.letters();




var startGame = function() {
    inquirer.prompt([{
        type: 'confirm',
        message: 'Hello! And Welcome to Star Wars Hangman!\nYou will be guessing important SW character names one letter at a time!\nYou will be allowed 3 misses!\nNow, don\'t be like a Storm Trooper!\nWould you like to play?',
        name: 'confirm',
        default: true
    }]).then(function(mess) {
        if (mess.confirm) {
            console.log('Then let\'s play!');
            valueCheck();
        } else { process.exit() }
    })
}

var valueCheck = function() {

    inquirer.prompt([{
        type: 'input',
        message: 'Select a letter:',
        name: 'letter'
    }]).then(function(mess) {

        compRpl(mess.letter, word, blankWord);
        valueCheck();
    })
}

startGame();