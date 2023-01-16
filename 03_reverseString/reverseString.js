const reverseString = function(string) {
    if (string == '') {
        return '';
    }
    const reversed = [];
    const splitString = string.split("");
    for (let i = string.length-1; i >= 0; i--) {
        reversed.push(string[i]);
    }

    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
