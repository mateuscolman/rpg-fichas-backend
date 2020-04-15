const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    character_name:{
        type: String,
        required:true
    }

});

module.exports = mongoose.model('Character', CharacterSchema);
module.exports = CharacterSchema;
