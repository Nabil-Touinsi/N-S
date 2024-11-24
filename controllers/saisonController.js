const Saison = require('../models/Saison');
const saisonView = require('../views/saisonView');

exports.getAllSaisons = (req, res) => {
    Saison.getAll((err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des saisons :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération des saisons' });
        } else {
            res.status(200).json(results);
        }
    });
};

exports.getSaisonById = (req, res) => {
    const { id } = req.params;
    Saison.getById(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la récupération de la saison :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération de la saison' });
        } else if (!result) {
            res.status(404).json({ error: 'Saison non trouvée' });
        } else {
            res.status(200).json(result);
        }
    });
};

exports.addSaison = (req, res) => {
    const { nomSaison, dateDebut, dateFin } = req.body;
    Saison.create({ nomSaison, dateDebut, dateFin }, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de la saison :', err.message);
            res.status(500).json({ error: 'Erreur lors de l\'ajout de la saison' });
        } else {
            res.status(201).json({ message: 'Saison ajoutée avec succès', id: result.insertId });
        }
    });
};

exports.updateSaison = (req, res) => {
    const { id } = req.params;
    const { nomSaison, dateDebut, dateFin } = req.body;
    Saison.update(id, { nomSaison, dateDebut, dateFin }, (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de la saison :', err.message);
            res.status(500).json({ error: 'Erreur lors de la mise à jour de la saison' });
        } else {
            res.status(200).json({ message: 'Saison mise à jour avec succès' });
        }
    });
};

exports.deleteSaison = (req, res) => {
    const { id } = req.params;
    Saison.delete(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression de la saison :', err.message);
            res.status(500).json({ error: 'Erreur lors de la suppression de la saison' });
        } else {
            res.status(200).json({ message: 'Saison supprimée avec succès' });
        }
    });
};
