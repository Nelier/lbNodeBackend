const express = require('express');
const routes = express.Router();

const home = '';
const checkConnection = require('./controllers/checkConnection');
const UserController = require('./controllers/UserController');


routes.get('/', (req, res) => {
    res.send('Hello World!');
    res.end('End of request');
});

routes.get('/testDB', checkConnection.Test);
routes.get('/testRaw', checkConnection.TestRaw);

routes.post('/User', UserController.create);
routes.put("/User", UserController.update);

module.exports = routes;
