const express = require('express');
const router = express.Router();
const etreDeTypeController = require('../controllers/etreDeTypeController');

// Ajouter un type à une habitation
router.post('/', etreDeTypeController.addTypeToHabitation);

// Supprimer un type d'une habitation
router.delete('/', etreDeTypeController.removeTypeFromHabitation);

// Récupérer tous les types d'une habitation
router.get('/:id', etreDeTypeController.getTypesByHabitation);

module.exports = router;
