const caesar = function(string, key) {
    let caesarString = '';
    while (key > 26) {
        key -= 26;
    }
    while (key < 0) {
        key += 26;
    }
    Loop1:
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) { // is upper case
            if (string.charCodeAt(i) + key < 65) {
                caesarString += String.fromCharCode(90 - (64 - (string.charCodeAt(i) + key)));
                continue Loop1;
            } else if (string.charCodeAt(i) + key > 90) {
                caesarString += String.fromCharCode(((string.charCodeAt(i) + key) - 26));
                continue Loop1;
            }
            caesarString += String.fromCharCode(string.charCodeAt(i) + key);
            continue Loop1;
        }
        if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) { // is lower case
            if (string.charCodeAt(i) + key < 97) {
                caesarString += String.fromCharCode(122 - (97 - (string.charCodeAt(i) + key)));
                continue Loop1;
            }
            if (string.charCodeAt(i) + key > 122) {
                caesarString += String.fromCharCode(((string.charCodeAt(i) + key) - 26));
                continue Loop1;
            }
            caesarString += String.fromCharCode(string.charCodeAt(i) + key);
            continue Loop1;
        }
    caesarString += string[i];
    }
    return caesarString;
};

// Do not edit below this line
module.exports = caesar;
