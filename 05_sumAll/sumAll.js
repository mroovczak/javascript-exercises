const sumAll = function(number1, number2) {
    let sum = 0;
    //isNaN checked returned true if argument was parsable to number, hence typeof
    if (typeof arguments[0] !='number' || typeof arguments[1] !='number') return "ERROR";
    if (arguments[0] < 0 || arguments[1] <0) return "ERROR";
    //makes sure loops go from lower to higher number
    let lower,higher;
    if (number1<number2){
        lower = number1;
        higher = number2;
    }else {
        lower = number2;
        higher = number1;
    }
    for(let i= lower; i<=higher; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
