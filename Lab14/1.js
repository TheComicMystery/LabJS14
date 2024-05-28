function upperCase(str) {
    if (str[0] === str[0].toUpperCase()) {
        console.log("String starts with uppercase character");
    } else {
        console.log("String does not start with uppercase character");
    }
}

// Приклади роботи:
upperCase('regexp'); // String does not start with uppercase character
upperCase('RegExp'); // String starts with uppercase character
