const caesar = function(text, shift) {
    let textUnicode=[];
    let ciphered= "";
    for (let index = 0; index < text.length; index++) {
        if (text[index].codePointAt() < 123 && text[index].codePointAt() >64) { 
            textUnicode[index] = text[index].codePointAt() + shift;
        } else {
            textUnicode[index] = text[index].codePointAt();
        }
    }
    ciphered = textUnicode.map(x => String.fromCodePoint(x)).join("");
    return ciphered;
};

// Do not edit below this line
module.exports = caesar;
