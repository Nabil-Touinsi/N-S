const Habitation = require('../models/Habitation');
const habitationView = require('../views/habitationView');

// Récupérer toutes les habitations
exports.getAllHabitations = (req, res) => {
    Habitation.getAll((err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des habitations :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération des habitations' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Récupérer une habitation par ID
exports.getHabitationById = (req, res) => {
    const { id } = req.params;
    Habitation.getById(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la récupération de l\'habitation :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération de l\'habitation' });
        } else if (!result) {
            res.status(404).json({ error: 'Habitation non trouvée' });
        } else {
            res.status(200).json(result);
        }
    });
};

// Ajouter une habitation
exports.addHabitation = (req, res) => {
    const data = req.body;
    Habitation.create(data, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de l\'habitation :', err.message);
            res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'habitation' });
        } else {
            res.status(201).json({ message: 'Habitation ajoutée avec succès', id: result.insertId });
        }
    });
};

// Mettre à jour une habitation
exports.updateHabitation = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Habitation.update(id, data, (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'habitation :', err.message);
            res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'habitation' });
        } else {
            res.status(200).json({ message: 'Habitation mise à jour avec succès' });
        }
    });
};

// Supprimer une habitation
exports.deleteHabitation = (req, res) => {
    const { id } = req.params;
    Habitation.delete(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression de l\'habitation :', err.message);
            res.status(500).json({ error: 'Erreur lors de la suppression de l\'habitation' });
        } else {
            res.status(200).json({ message: 'Habitation supprimée avec succès' });
        }
    });
};
