const removeFromArray = function() {
    let array = arguments[0];

    for (let i = 1; i < arguments.length + 1; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === arguments[i]) {
                array.splice(j, 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
