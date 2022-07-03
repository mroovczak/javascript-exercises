const shiftAmount = function(char, amount){
    const alphaUpper = Array.from(Array(26)).map((e, i) => i + 65);
    const alphaLower = Array.from(Array(26)).map((e, i) => i + 97);
    const lettersUpper = alphaUpper.map((x) => String.fromCharCode(x));
    const lettersLower = alphaLower.map((x) => String.fromCharCode(x));
    let index =-1;
    index = lettersUpper.findIndex(element => element === char);
    if(index != -1){
        return lettersUpper[(index+amount)<26 ? (index+amount) : (index+amount) - 26];
    } 
    index = lettersLower.findIndex(element => element === char);
    if(index != -1){
        return lettersLower[(index+amount)<26 ? (index+amount) :(index+amount) - 26];
    } else {
        return char;
    }
};
const caesar = function(text, shift) {

    let ciphered= "";
    let textUnicode =  text.split("").map(char => shiftAmount(char, shift));
    ciphered = textUnicode.join("");
    return ciphered;
};

// Do not edit below this line
module.exports = caesar;
