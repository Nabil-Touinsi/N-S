const TypeLocation = require('../models/TypeLocation');
const typeLocationView = require('../views/typeLocationView');

// Récupérer tous les types de location
exports.getAllTypes = (req, res) => {
    TypeLocation.getAll((err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des types de location :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération des types de location' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Ajouter un type de location
exports.addType = (req, res) => {
    const data = req.body;
    TypeLocation.add(data, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout du type de location :', err.message);
            res.status(500).json({ error: 'Erreur lors de l\'ajout du type de location' });
        } else {
            res.status(201).json({ message: 'Type de location ajouté avec succès', id: result.insertId });
        }
    });
};

// Récupérer un type de location par ID
exports.getTypeById = (req, res) => {
    const id = req.params.id;
    TypeLocation.getById(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la récupération du type de location :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération du type de location' });
        } else if (!result) {
            res.status(404).json({ error: 'Type de location non trouvé' });
        } else {
            res.status(200).json(result);
        }
    });
};

// Mettre à jour un type de location
exports.updateType = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    TypeLocation.update(id, data, (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour du type de location :', err.message);
            res.status(500).json({ error: 'Erreur lors de la mise à jour du type de location' });
        } else {
            res.status(200).json({ message: 'Type de location mis à jour avec succès' });
        }
    });
};

// Supprimer un type de location
exports.deleteType = (req, res) => {
    const id = req.params.id;
    TypeLocation.delete(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression du type de location :', err.message);
            res.status(500).json({ error: 'Erreur lors de la suppression du type de location' });
        } else {
            res.status(200).json({ message: 'Type de location supprimé avec succès' });
        }
    });
};
