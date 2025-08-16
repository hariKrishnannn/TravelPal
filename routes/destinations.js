const express = require('express');

const {
  getDestinations,
  getDestination,
  createDestination,
  updateDestination,
  deleteDestination,
} = require('../controller/destinations');

const router = express.Router();

router.route('/').get(getDestinations).post(createDestination);

router
  .route('/:id')
  .put(updateDestination)
  .delete(deleteDestination)
  .get(getDestination);

module.exports = router;
