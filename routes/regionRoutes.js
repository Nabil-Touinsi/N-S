const express = require('express');
const router = express.Router();
const regionController = require('../controllers/regionController');

// Route pour récupérer toutes les régions
router.get('/', regionController.getAllRegions);

// Route pour récupérer une région par ID
router.get('/:id', regionController.getRegionById);

// Route pour ajouter une région
router.post('/', regionController.addRegion);

// Route pour mettre à jour une région
router.put('/:id', regionController.updateRegion);

// Route pour supprimer une région
router.delete('/:id', regionController.deleteRegion);

module.exports = router;
