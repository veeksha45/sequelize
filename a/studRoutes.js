const express = require('express');
const router = express.Router();
const studController = require('../controllers/studController');

router.post('/', studController.createUser);
router.get('/', studController.getUsers);
router.get('/:id', studController.getUserById);
router.put('/:id', studController.updateUser);
router.delete('/:id', studController.deleteUser);

module.exports = router;