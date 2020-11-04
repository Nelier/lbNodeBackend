const express = require('express');
const AuthController = require('./controllers/AuthController');
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
routes.delete("/User", UserController.delete);

routes.post("/Login", AuthController.Login);

module.exports = routes;
