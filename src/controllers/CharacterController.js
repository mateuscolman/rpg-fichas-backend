const mongoose = require('mongoose');
const User = mongoose.model('User');
const Character = mongoose.model('Character');
module.exports = {

    async createCharacter(req, res){
        const email = await req.params.email;
        if(!email) return res.json({error: 'Dados insuficientes'});
        const character = await req.body;
        if(!character) return res.json({error: 'Dados insuficientes '+ character});

        try
        {
            const user = await User.findOne({email});
            if (email != user.email) return res.json({error: 'Erro ao vincular ficha'});

            try
            {    
            await User.create(req.body)
            return res.json(user)
            }
            catch (err)
            {
                return res.json({erro: 'Erro ao cadastrar ficha!. Erro: '+ err})
            }
        }
        catch (err)
        {
            return res.json({erro: 'Erro ao cadastrar ficha. Erro: '+ err})
        }        
    },

    async listCharacter(req, res){
        const character = await Character.find();
        return res.json(character);
    }

}