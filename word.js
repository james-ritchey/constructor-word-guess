var Letter = require("./letter");

function Word(str) {
    this.word = str;
    this.letters = [];
    for(var i = 0; i < str.length; i++) {
        this.letters.push(new Letter(str.charAt(i)));
    }
    this.getCurrentWord = function() {
        var currentState = "";
        this.letters.forEach(function(i){
            var c = i.getChar();
            currentState = currentState + c + " ";
        });
        return currentState;
    }
    this.guessLetter = function(c) {
        this.letters.forEach(function(i){
            i.checkChar(c);
        });
    }
}

module.exports = Word;