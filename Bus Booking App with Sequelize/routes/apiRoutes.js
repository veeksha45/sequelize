const express = require('express');
const router = express.Router();
const controller = require('../controller/apiController');

router.post('/users', controller.addUser);
router.get('/users', controller.getUsers);

router.post('/buses', controller.addBus);
router.get('/buses/available/:seats', controller.getAvailableBuses);

module.exports = router;
