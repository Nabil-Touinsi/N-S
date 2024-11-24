const express = require('express');
const router = express.Router();
const typeLocationController = require('../controllers/TypeLocationController');

// Récupérer tous les types de location
router.get('/', typeLocationController.getAllTypes);

// Ajouter un type de location
router.post('/', typeLocationController.addType);

// Récupérer un type de location par ID
router.get('/:id', typeLocationController.getTypeById);

// Mettre à jour un type de location
router.put('/:id', typeLocationController.updateType);

// Supprimer un type de location
router.delete('/:id', typeLocationController.deleteType);

module.exports = router;
