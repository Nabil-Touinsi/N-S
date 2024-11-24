const express = require('express');
const router = express.Router();
const situerController = require('../controllers/situerController');

router.get('/', situerController.getAll);
router.get('/:id', situerController.getById);
router.post('/', situerController.create);
router.delete('/:id', situerController.delete);

module.exports = router;
