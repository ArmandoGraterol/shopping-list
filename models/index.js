const Sequelize = require('sequelize');

const sequelize = new Sequelize('database name', 'username', 'password', {
  dialect: 'postgres',
});

const models = {
  Item: sequelize.import('./item'),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;