const express = require('express');
const router = express.Router();
const equipementController = require('../controllers/equipementController');

// Récupérer tous les équipements
router.get('/', equipementController.getAllEquipements);

// Récupérer un équipement par ID
router.get('/:id', equipementController.getEquipementById);

// Ajouter un équipement
router.post('/', equipementController.addEquipement);

// Mettre à jour un équipement
router.put('/:id', equipementController.updateEquipement);

// Supprimer un équipement
router.delete('/:id', equipementController.deleteEquipement);

module.exports = router;
