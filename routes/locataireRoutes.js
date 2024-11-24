const express = require('express');
const router = express.Router();
const locataireController = require('../controllers/locataireController');

// Récupérer tous les locataires
router.get('/', locataireController.getAllLocataires);

// Récupérer un locataire par ID
router.get('/:id', locataireController.getLocataireById);

// Ajouter un locataire
router.post('/', locataireController.addLocataire);

// Modifier un locataire
router.put('/:id', locataireController.updateLocataire);

// Supprimer un locataire
router.delete('/:id', locataireController.deleteLocataire);

module.exports = router;
