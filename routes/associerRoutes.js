const express = require('express');
const router = express.Router();
const associerController = require('../controllers/associerController');

// Récupérer toutes les associations
router.get('/', associerController.getAllAssociations);

// Ajouter une association
router.post('/', associerController.createAssociation);

// Supprimer une association
router.delete('/:id', associerController.deleteAssociation);

module.exports = router;
