const crypto = require('crypto');

const fakeUser = {
    email: "victor@victor.com",
    password: "Victor123",
    SecondPassword: "Victor123",
}

const fakeData = {
    email: "",
    password: "",
    SecondPassword: "",
}

function Encrypt(password, second) {
    const hmac = crypto.createHmac('md5', password).digest('HEX');
    const hmac2 = crypto.createHmac('md5', second).digest('HEX');
    fakeData.password = hmac;
    fakeData.SecondPassword = hmac2;
    fakeData.email = fakeUser.email;

    console.log(fakeData)
}

Encrypt(fakeUser.password, fakeUser.SecondPassword);