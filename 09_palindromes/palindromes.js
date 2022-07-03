const reverseString = require('../03_reverseString/reverseString')
const palindromes = function (text) {
    //used regular expresion to replace all special chars at once 
    //added /g paramter regexp must be global!
    striped = text.replaceAll( /[&\/\\#,\ \s +()$~%.'":*?<>{!}]/g,"");
    striped = striped.toLowerCase();
    reversed = reverseString(striped);
    return striped == reversed ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
