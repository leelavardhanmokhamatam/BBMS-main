const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('node_bbms', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;

