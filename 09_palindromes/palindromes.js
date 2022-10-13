const palindromes = function (string) {
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g;
    return string.toLowerCase().replace(regex, '') === string.toLowerCase().replace(regex, '').split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
