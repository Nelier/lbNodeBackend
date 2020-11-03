const express = require('express');
const routes = express.Router();

const home = '';
const checkConnection = require('./controllers/checkConnection');


routes.get('/', (req, res) => {
    res.send('Hello World!');
    res.end('End of request');
});

routes.get('/testDB', checkConnection.Test);
routes.get('/testRaw', checkConnection.TestRaw);


module.exports = routes;
