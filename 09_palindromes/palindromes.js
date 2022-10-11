const palindromes = function (string) {
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g;
    let string2 = string.toLowerCase().replace(regex, '');
    let reverseString = string2.split('').reverse().join('');
    return reverseString === string2;
};

// Do not edit below this line
module.exports = palindromes;
