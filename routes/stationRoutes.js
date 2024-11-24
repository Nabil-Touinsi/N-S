const express = require('express');
const router = express.Router();
const stationController = require('../controllers/stationController');

// Récupérer toutes les stations
router.get('/', stationController.getAllStations);

// Récupérer une station par ID
router.get('/:id', stationController.getStationById);

// Ajouter une station
router.post('/', stationController.addStation);

// Modifier une station
router.put('/:id', stationController.updateStation);

// Supprimer une station
router.delete('/:id', stationController.deleteStation);

module.exports = router;
