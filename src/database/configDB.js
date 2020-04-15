const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb+srv://admin:admin@fichas-rpg-5m3i3.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: '+ err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados');
});

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!');
});


// mongodb+srv://admin:admin@fichas-rpg-5m3i3.mongodb.net/test?retryWrites=true&w=majority  << cloud
// mongodb://localhost:27017/rpg-fichas << local