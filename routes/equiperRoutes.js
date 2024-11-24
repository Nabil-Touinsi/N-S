const express = require('express');
const router = express.Router();
const equiperController = require('../controllers/equiperController');

// Route pour ajouter un équipement à une habitation
router.post('/', equiperController.addEquipmentToHabitation);

// Route pour récupérer les équipements d'une habitation
router.get('/:idHabitation', equiperController.getEquipmentsByHabitation);

module.exports = router;
