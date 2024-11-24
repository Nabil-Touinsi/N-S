const express = require('express');
const router = express.Router();
const activiteController = require('../controllers/activiteController');

router.get('/', activiteController.getAll);
router.get('/:id', activiteController.getById);
router.post('/', activiteController.create);
router.put('/:id', activiteController.update);
router.delete('/:id', activiteController.delete);


module.exports = router;
