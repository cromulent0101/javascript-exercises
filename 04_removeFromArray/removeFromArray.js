const removeFromArray = function(array, ...args) {
    for (let value of args) {
        array = array.filter(item => item !== value);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
