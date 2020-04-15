const express = require('express');
const requireDir = require('require-dir');
const mongoose = require('mongoose');
const cors = require('cors');
const autoIncrement = require('mongoose-auto-increment');
mongoose.set('useCreateIndex', true);
var autoIncConnection = mongoose.createConnection("mongodb+srv://admin:admin@fichas-rpg-5m3i3.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }); 
const app = express();
app.use(express.json());
app.use(cors())
require('./database/configDB');
autoIncrement.initialize(autoIncConnection)
requireDir('./models');
app.use('/', require('./routes'));
app.listen(3008);