const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const GameSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    reference:{
        type: Number
    },
    players:[{
        email:{
            type: String
        }
    }],
    creator:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    active:{
        type: Boolean,
        default: true
    }
});

GameSchema.plugin(autoIncrement.plugin, { model: 'Game', field: 'reference' });
module.exports = mongoose.model('Game', GameSchema);