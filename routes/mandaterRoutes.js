const express = require('express');
const router = express.Router();
const mandaterController = require('../controllers/mandaterController');

// Récupérer toutes les relations Mandater
router.get('/', mandaterController.getAll);

// Ajouter une nouvelle relation Mandater
router.post('/', mandaterController.create);

module.exports = router;
