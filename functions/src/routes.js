const router = require('express');
const handler = require('./app/users/create-user-controller');

const routes = new router();

routes.post('/users', handler);

module.exports = routes;