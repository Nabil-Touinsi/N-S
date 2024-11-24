const express = require('express');
const router = express.Router();
const proprietaireController = require('../controllers/proprietaireController');

// Route pour récupérer le nombre d'habitations pour chaque propriétaire
router.get('/habitations-count', proprietaireController.getHabitationsCountByProprietaire);

// Récupérer tous les propriétaires
router.get('/', proprietaireController.getAllProprietaires);

// Récupérer un propriétaire par ID
router.get('/:id', proprietaireController.getProprietaireById);

// Ajouter un propriétaire
router.post('/', proprietaireController.addProprietaire);

// Modifier un propriétaire
router.put('/:id', proprietaireController.updateProprietaire);

// Supprimer un propriétaire
router.delete('/:id', proprietaireController.deleteProprietaire);

module.exports = router;
