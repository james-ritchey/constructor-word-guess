function Letter(char) {
    this.character = char;
    this.guessed = false;
    this.getChar = function(){
        if(this.guessed) {
            return this.character;
        }
        else {
            return "_";
        }
    }
    this.checkChar = function(c){
        if(c === this.character) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;