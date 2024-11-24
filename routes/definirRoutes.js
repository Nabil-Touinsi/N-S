const express = require('express');
const router = express.Router();
const definirController = require('../controllers/definirController');

// Récupérer tous les tarifs
router.get('/', definirController.getAllTarifs);

// Ajouter un nouveau tarif
router.post('/', definirController.addTarif);

// Mettre à jour un tarif existant
router.put('/:id', definirController.updateTarif);

// Supprimer un tarif
router.delete('/:id', definirController.deleteTarif);

module.exports = router;
