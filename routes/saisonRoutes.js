const express = require('express');
const router = express.Router();
const saisonController = require('../controllers/saisonController');

// Récupérer toutes les saisons
router.get('/', saisonController.getAllSaisons);

// Récupérer une saison par ID
router.get('/:id', saisonController.getSaisonById);

// Ajouter une saison
router.post('/', saisonController.addSaison);

// Mettre à jour une saison
router.put('/:id', saisonController.updateSaison);

// Supprimer une saison
router.delete('/:id', saisonController.deleteSaison);

module.exports = router;
