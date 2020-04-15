const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

const createToken = (userId) => {
    return jwt.sign({id: userId}, 'rpg-api', {expiresIn: '7d'});
};

module.exports = {
    async loginAuth(req, res){
        const {email, password} = await req.body;
        if (!email || !password) return res.json({error: 'Dados insuficientes'});

        try {
            const user = await User.findOne({email});
            if (email != user.email) return res.json({error: 'usuário não cadastrado ' });

            if (password != user.password) res.json({error: 'Senha inválida! Tente novamente.'})
            
            // return res.json({error: 'Erro na autenticação.'+password+' | '+req.body.password})
            return res.json({user, rpg_token: createToken(user.id)})
            //return res.json(user.password)
        }
        catch (err){
            return res.json({error: 'erro ao realizar login. Erro: '+ err});
        }
    },
    
    async createUser(req, res){
        try{
        const { email, password } = await req.body;
        if (!email || !password) return res.json({error: 'Dados insuficientes'});
        }
        catch(err){
            return res.json({error: 'Erro inexperado. Erro: '+ err});
        }

        try {
            var email = req.body.email;
            if (await User.findOne({email})) return res.json({error: 'Usuário já cadastrado'});
            const user = await User.create(req.body);
            return res.json(user);
        }
        catch (err){
            return res.json({error: 'erro ao realizar cadastro. Erro: '+ err});
        }
    }
};