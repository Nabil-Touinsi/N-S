const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Routes CRUD pour l'entité Service
router.get('/', serviceController.getAllServices); // Obtenir tous les services
router.get('/:id', serviceController.getServiceById); // Obtenir un service par ID
router.post('/', serviceController.createService); // Créer un service
router.put('/:id', serviceController.updateService); // Mettre à jour un service
router.delete('/:id', serviceController.deleteService); // Supprimer un service

module.exports = router;
