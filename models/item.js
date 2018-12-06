const item = (sequelize, DataType) => {
  const Item = sequelize.define('item', {
    name: DataType.STRING,
  });

  return Item;
};

module.exports = item;