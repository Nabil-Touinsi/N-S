const Locataire = require('../models/Locataire');
const locataireView = require('../views/locataireView');

// Récupérer tous les locataires
exports.getAllLocataires = (req, res) => {
    Locataire.getAll((err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des locataires :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération des locataires' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Récupérer un locataire par ID
exports.getLocataireById = (req, res) => {
    const { id } = req.params;
    Locataire.getById(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la récupération du locataire :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération du locataire' });
        } else if (!result) {
            res.status(404).json({ error: 'Locataire non trouvé' });
        } else {
            res.status(200).json(result);
        }
    });
};

// Ajouter un locataire
exports.addLocataire = (req, res) => {
    const data = req.body;
    Locataire.create(data, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout du locataire :', err.message);
            res.status(500).json({ error: 'Erreur lors de l\'ajout du locataire' });
        } else {
            res.status(201).json({ message: 'Locataire ajouté avec succès', id: result.insertId });
        }
    });
};

// Modifier un locataire
exports.updateLocataire = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Locataire.update(id, data, (err, result) => {
        if (err) {
            console.error('Erreur lors de la modification du locataire :', err.message);
            res.status(500).json({ error: 'Erreur lors de la modification du locataire' });
        } else {
            res.status(200).json({ message: 'Locataire modifié avec succès' });
        }
    });
};

// Supprimer un locataire
exports.deleteLocataire = (req, res) => {
    const { id } = req.params;
    Locataire.delete(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression du locataire :', err.message);
            res.status(500).json({ error: 'Erreur lors de la suppression du locataire' });
        } else {
            res.status(200).json({ message: 'Locataire supprimé avec succès' });
        }
    });
};
