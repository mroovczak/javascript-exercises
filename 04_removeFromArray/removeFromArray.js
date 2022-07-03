const removeFromArrayFilter = function(item, arr){
    if(arr.includes(item) == false) return true;
};
const removeFromArray = function(arr) {
    let result;
    if (arguments.length>1) {
        //arguemnts assigned to an array (arguments[] isnt really an array)
        let args = Array.prototype.slice.call(arguments);
        result = arr.filter(item => removeFromArrayFilter(item,args))
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
