const repeatString = function(string, repeat) {
    let word = '';
    for (let i = 0; i < repeat; i++) {
        word += string;
    }
    if (repeat === -1) {
        word += 'ERROR';
    }
    return word
};

// Do not edit below this line
module.exports = repeatString;
