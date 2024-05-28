function validateCreditCard(cardNumber) {
    const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regex.test(cardNumber);
}

// Приклад роботи:
console.log(validateCreditCard('9999-9999-9999-9999')); // true
