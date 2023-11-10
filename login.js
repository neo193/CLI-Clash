const { client } = require('./client');
require('dotenv').config();

async function Login() {
    const password = process.env.PASSWORD;
    if (!password) {
        throw new Error('CLASH_OF_CLANS_PASSWORD environment variable not set');
    }

    await client.login({ email: 'sriharshakr3211@gmail.com', password });
}

module.exports = { Login };