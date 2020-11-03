const crypto = require('crypto');

async function Encrypt(password) {
    const hmac = await crypto.createHmac('md5', password).digest('HEX');
    return hmac;
};

module.exports = Encrypt;