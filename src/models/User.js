const mongoose = require('mongoose');
const CharacterSchema = require('./Character');

const UserSchema = new mongoose.Schema({
    email:
    {
        type: String,
        required: true
    },

    password:
    {
        type: String,
        required: true
    },

    profile:
    {
        type: String
    },
        
    createdAt:
    {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);