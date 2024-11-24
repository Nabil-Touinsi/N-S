const express = require('express');
const router = express.Router();
const contratController = require('../controllers/contratController');

// Récupérer tous les contrats
router.get('/', contratController.getAllContrats);

// Récupérer un contrat par ID
router.get('/:id', contratController.getContratById);

// Ajouter un contrat
router.post('/', contratController.addContrat);

// Mettre à jour un contrat
router.put('/:id', contratController.updateContrat);

// Supprimer un contrat
router.delete('/:id', contratController.deleteContrat);

module.exports = router;
