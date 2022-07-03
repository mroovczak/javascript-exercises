const repeatString = function(text, times) {
    text_returned="";
    if (times<0) return "ERROR";
    for (i=0; i<times; i++) {
        text_returned +=text;
    }
    return text_returned;
};

// Do not edit below this line
module.exports = repeatString;
