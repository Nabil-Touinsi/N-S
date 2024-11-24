const express = require('express');
const router = express.Router();
const catalogueController = require('../controllers/catalogueController');

// Récupérer tous les catalogues
router.get('/', catalogueController.getAllCatalogues);

// Récupérer un catalogue par ID
router.get('/:id', catalogueController.getCatalogueById);

// Récupérer les habitations d'un catalogue
router.get('/:id/habitations', catalogueController.getHabitationsByCatalogue);

// Ajouter un catalogue
router.post('/', catalogueController.addCatalogue);

// Mettre à jour un catalogue
router.put('/:id', catalogueController.updateCatalogue);

// Supprimer un catalogue
router.delete('/:id', catalogueController.deleteCatalogue);

module.exports = router;
