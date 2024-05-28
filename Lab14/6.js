function checkEmail(email) {
    const regex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})+$/;
    return regex.test(email);
}

// Приклад роботи:
console.log(checkEmail('my_mail@gmail.com')); // true
console.log(checkEmail('#my_mail@gmail.com')); // false
console.log(checkEmail('my_ma--il@gmail.com')); // false
