const sumAll = function(start, end) {
    if (start > end) { // swap variables if not passed properly
        let temp = start;
        start = end;
        end = temp;
    }
    if ((start < 0) | (end < 0)) {
        return 'ERROR';
    }
    if ((typeof(start) != 'number') | (typeof(end) != 'number')) {
        return 'ERROR';
    }
    let sum = 0
    while (start <= end) {
        sum = sum + start;
        start++;
    }
    return sum;


};

// Do not edit below this line
module.exports = sumAll;
