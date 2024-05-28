function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Приклад роботи:
console.log(checkEmail("Qmail2@gmail.com")); // true
