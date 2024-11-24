const Catalogue = require('../models/Catalogue');
const catalogueView = require('../views/catalogueView');

// Récupérer tous les catalogues
exports.getAllCatalogues = (req, res) => {
    Catalogue.getAll((err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des catalogues :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération des catalogues' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Récupérer un catalogue par ID
exports.getCatalogueById = (req, res) => {
    const { id } = req.params;
    Catalogue.getById(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la récupération du catalogue :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération du catalogue' });
        } else if (!result) {
            res.status(404).json({ error: 'Catalogue non trouvé' });
        } else {
            res.status(200).json(result);
        }
    });
};

// Récupérer les habitations d'un catalogue
exports.getHabitationsByCatalogue = (req, res) => {
    const { id } = req.params;
    Catalogue.getHabitationsByCatalogue(id, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des habitations du catalogue :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération des habitations' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Ajouter un catalogue
exports.addCatalogue = (req, res) => {
    const { Annee, DatePublication } = req.body;
    Catalogue.create({ Annee, DatePublication }, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout du catalogue :', err.message);
            res.status(500).json({ error: 'Erreur lors de l\'ajout du catalogue' });
        } else {
            res.status(201).json({ message: 'Catalogue ajouté avec succès', id: result.insertId });
        }
    });
};

// Mettre à jour un catalogue
exports.updateCatalogue = (req, res) => {
    const { id } = req.params;
    const { Annee, DatePublication } = req.body;
    Catalogue.update(id, { Annee, DatePublication }, (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour du catalogue :', err.message);
            res.status(500).json({ error: 'Erreur lors de la mise à jour du catalogue' });
        } else {
            res.status(200).json({ message: 'Catalogue mis à jour avec succès' });
        }
    });
};

// Supprimer un catalogue
exports.deleteCatalogue = (req, res) => {
    const { id } = req.params;
    Catalogue.delete(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression du catalogue :', err.message);
            res.status(500).json({ error: 'Erreur lors de la suppression du catalogue' });
        } else {
            res.status(200).json({ message: 'Catalogue supprimé avec succès' });
        }
    });
};
