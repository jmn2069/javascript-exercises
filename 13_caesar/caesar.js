const caesar = function(string, key) {
    let caesarString = '';
    let charCode = 0;

    while (key > 26) {
        key -= 26;
    }
    while (key < 0) {
        key += 26;
    }

    for (let i = 0; i < string.length; i++) {
        charCode = string.charCodeAt(i);

        if (charCode > 64 && charCode < 91) {
            if (charCode + key < 65) {
                caesarString += String.fromCharCode(26 + (charCode + key))
            } else if (charCode + key > 90) {
                    caesarString += String.fromCharCode((charCode + key) - 26);
            } else {
                caesarString += String.fromCharCode(charCode + key);
            }
            continue;
        }

        if (charCode > 96 && charCode < 123) {
            if (charCode + key < 97) {
                caesarString += String.fromCharCode(26 + (charCode + key))
            } else if (charCode + key > 122) {
                caesarString += String.fromCharCode((charCode + key) - 26);
            } else {
                caesarString += String.fromCharCode(charCode + key);
            }
            continue;
        }

        caesarString += String.fromCharCode(charCode);
    }

    return caesarString;
};

// Do not edit below this line
module.exports = caesar;
