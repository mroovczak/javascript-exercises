const sumAll = function(number1, number2) {
    let sum = 0;
    //NaN Not a Number
    if (isNaN(arguments[0]) || isNaN(arguments[1])) return "ERROR";
    if (isNaN(arguments[0]) < 0 || (arguments[1]) <0) return "ERROR";
    for(let i=number1; i<=number2; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
