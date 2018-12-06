const Sequelize = require('sequelize');

const sequelize = new Sequelize('shoppinglist', 'postgres', 'forme1098', {
  dialect: 'postgres',
});

const models = {
  Item: sequelize.import('./item'),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;