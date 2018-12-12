const express = require('express');
const router = express.Router();
const models = require('../../models');

// Gets all items from the db by the date they are created
router.get('/', (req, res) => {
  models.Item.findAll({
    order: models.sequelize.col('createdAt'),
  }).then(items => {
    res.json(items);
  });
});

// Sends a new item to the db
router.post('/', (req, res) => {
  models.Item.build({
    name: req.body.name
  })
  .save()
  .then( item => res.json(item) );
});

// Deletes an item from the db
router.delete('/:id', (req, res) => {
  models.Item.findById(req.params.id).then(item => {
    item.destroy().then(() => {
      res.json({success: true});
    });
  }).catch(err => res.status(404).json({success:false}));
});

module.exports = router;