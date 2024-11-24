const express = require('express');
const router = express.Router();
const habitationController = require('../controllers/habitationController');

// Récupérer toutes les habitations
router.get('/', habitationController.getAllHabitations);

// Récupérer une habitation par ID
router.get('/:id', habitationController.getHabitationById);

// Ajouter une habitation
router.post('/', habitationController.addHabitation);

// Mettre à jour une habitation
router.put('/:id', habitationController.updateHabitation);

// Supprimer une habitation
router.delete('/:id', habitationController.deleteHabitation);

module.exports = router;
