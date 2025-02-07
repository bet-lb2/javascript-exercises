const sumAll = function(first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second)) {
        return "ERROR";
    }
    if (first < 0 || second < 0) {
        return "ERROR";
    }
    const min = first > second ? second : first;
    const max = first > second ? first : second;
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
