const Equipement = require('../models/Equipement');
const EquipementView = require('../views/equipementView');

// Récupérer tous les équipements
exports.getAllEquipements = (req, res) => {
    Equipement.getAll((err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des équipements :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération des équipements' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Récupérer un équipement par ID
exports.getEquipementById = (req, res) => {
    const { id } = req.params;
    Equipement.getById(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la récupération de l\'équipement :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération de l\'équipement' });
        } else if (!result) {
            res.status(404).json({ error: 'Équipement non trouvé' });
        } else {
            res.status(200).json(result);
        }
    });
};

// Ajouter un équipement
exports.addEquipement = (req, res) => {
    const data = req.body;
    Equipement.create(data, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de l\'équipement :', err.message);
            res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'équipement' });
        } else {
            res.status(201).json({ message: 'Équipement ajouté avec succès', id: result.insertId });
        }
    });
};

// Mettre à jour un équipement
exports.updateEquipement = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Equipement.update(id, data, (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'équipement :', err.message);
            res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'équipement' });
        } else {
            res.status(200).json({ message: 'Équipement mis à jour avec succès' });
        }
    });
};

// Supprimer un équipement
exports.deleteEquipement = (req, res) => {
    const { id } = req.params;
    Equipement.delete(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression de l\'équipement :', err.message);
            res.status(500).json({ error: 'Erreur lors de la suppression de l\'équipement' });
        } else {
            res.status(200).json({ message: 'Équipement supprimé avec succès' });
        }
    });
};
    