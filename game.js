var inquirer = require('inquirer');

var wordFile = require('./wordBuilder.js');

var swNames = ['Chewy', 'Luke', 'Han', 'Leia', 'Anakin', 'R2D2', 'Rey', 'Fynn'];

var randoWord = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

var newWord = new wordFile(randoWord(swNames));

var startGame = function() {
    inquirer.prompt([{
        type: 'confirm',
        message: 'Hello! And Welcome to Star Wars Hangman!\nYou will be guessing important SW character names one letter at a time!\nYou will be allowed 3 misses!\nNow, don\'t be like a Storm Trooper!\nWould you like to play?',
        name: 'confirm',
        default: true
    }]).then(function(mess) {
        if (mess.confirm) {
            console.log('Then let\'s play!');
            newWord.checkLetter();

        } else { process.exit() }
    })
}

var runGame = function() {
    var guessLeft = 3;
    inquirer.prompt([{
        type: 'input',
        message: 'Guess a letter',
        name: 'letter'
    }]).then(function(mess) {
        runGame();
    })
}

startGame();