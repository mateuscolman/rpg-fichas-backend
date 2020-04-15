const mongoose = require('mongoose');
const Game = require('../models/Game')
module.exports = {
    async createGame(req, res){
        const gameBody = await req.body;
        try{
           const game = await Game.create(gameBody);
           return res.json(game)
        }
        catch (err){
            return res.json({error: 'Erro inexperado ao criar Mesa. Erro: '+err})
        }
    },

    async listGameByUser(req, res){
        try {
            const email = req.params.email
            const game = await Game.find({"players.email": email})
            return res.json(game)
        }
        catch (err){
            return res.json({error: 'Erro inexperado ao buscar Mesas. Erro: '+err})
        }
    },

    async updateGame(req, res){
        try{
            if(req.body.players || req.body.reference) return res.json({error: 'Invalid method'})
            const _id = await req.params._id
            const update = await req.body
            game = await Game.findOneAndUpdate({_id}, update, {new: true})
            return res.json(game)
        }
        catch (err){
            return res.json({error: 'Erro inexperado ao alterar dados da mesa. Erro: '+err})
        }

    },

    async insertPlayers(req, res){
        try{
            if(req.body.name || req.body.reference || req.body.active) return res.json({error: 'Invalid method'})
            if(!req.body.email) return res.json({error: 'Dados insulficientes!'})
            const _id = await req.params._id
            const update = await req.body
            const email = Game.findOne({_id: _id, players: {$in: update.email}})
            if (email == update) return res.json({error: 'E-mail informado ja faz parte da mesa! '+email})
            const game = await Game.updateOne({_id}, {$push:{players: update}}, {new: true})
            return res.json(game+email)
        }
        catch (err){
            return res.json({error: 'Erro inexperado ao inserir Jogadores. Erro: '+err})
        }
    },


    async list(req, res){
        try {
            const id = req.params._id
            const game = await Game.find({_id: id})
            return res.json(game)
        }
        catch (err){
            return res.json({error: 'Erro inexperado ao buscar Mesas. Erro: '+err})
        }
    }

}
    