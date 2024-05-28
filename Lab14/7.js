function checkLogin(login) {
    const numbers = login.match(/\d+(\.\d+)?/g) || [];
    const regex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
    return {
        valid: regex.test(login),
        numbers
    };
}

// Приклад роботи:
console.log(checkLogin('ee1.1ret3')); // { valid: true, numbers: ["1.1", "3"] }
console.log(checkLogin('ee1*1ret3')); // { valid: false, numbers: ["1", "1", "3"] }
