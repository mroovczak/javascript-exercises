const reverseString = function(text) {
    reversed_text = "";
    for (i=0; i<text.length; i++){
        reversed_text += text[text.length-i-1]; 
    }
    return reversed_text;
};

// Do not edit below this line
module.exports = reverseString;
