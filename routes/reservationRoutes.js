const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.get('/with-locataire', reservationController.getReservationsWithLocataire);

// Récupérer toutes les réservations
router.get('/', reservationController.getAllReservations);

// Récupérer une réservation par ID
router.get('/:id', reservationController.getReservationById);

// Ajouter une réservation
router.post('/', reservationController.addReservation);

// Mettre à jour une réservation
router.put('/:id', reservationController.updateReservation);

// Supprimer une réservation
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;
