const fibonacci = function(num) {
    if (num < 0){
        return "OOPS";
    }
    let array = [1, 1];
    for (let i = 0; i < num; i++) {
        array.push(array[i] + array[i + 1]);
    }
    return array[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
