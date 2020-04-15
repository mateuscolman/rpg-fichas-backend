const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const CharacterController = require('./controllers/CharacterController');
const GameController = require('./controllers/GameController')

//Usuários
routes.post('/user/create', UserController.createUser);
routes.post('/user/login', UserController.loginAuth);

//Fichas
routes.post('/character/create/:email', CharacterController.createCharacter);
routes.get('/character/list', CharacterController.listCharacter);

//Mesa
routes.post('/game/create', GameController.createGame)
routes.get('/game/list/:email', GameController.listGameByUser)
routes.post('/game/updateInfo/:_id', GameController.updateGame)
routes.post('/game/insertPlayer/:_id', GameController.insertPlayers)   
routes.get('/room/:_id', GameController.list)

module.exports = routes;