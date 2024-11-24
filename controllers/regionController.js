const Region = require('../models/Region');
const regionView = require('../views/regionView');

// Contrôleur pour récupérer toutes les régions
exports.getAllRegions = (req, res) => {
    Region.getAllRegions((err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des régions :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération des régions' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Contrôleur pour récupérer une région par ID
exports.getRegionById = (req, res) => {
    const idRegion = req.params.id;
    Region.getRegionById(idRegion, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération de la région :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération de la région' });
        } else {
            res.status(200).json(results[0]);
        }
    });
};

// Contrôleur pour ajouter une région
exports.addRegion = (req, res) => {
    const region = req.body;
    Region.addRegion(region, (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de la région :', err.message);
            res.status(500).json({ error: 'Erreur lors de l\'ajout de la région' });
        } else {
            res.status(201).json({ message: 'Région ajoutée avec succès', id: results.insertId });
        }
    });
};

// Contrôleur pour mettre à jour une région
exports.updateRegion = (req, res) => {
    const idRegion = req.params.id;
    const region = req.body;
    Region.updateRegion(idRegion, region, (err, results) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de la région :', err.message);
            res.status(500).json({ error: 'Erreur lors de la mise à jour de la région' });
        } else {
            res.status(200).json({ message: 'Région mise à jour avec succès' });
        }
    });
};

// Contrôleur pour supprimer une région
exports.deleteRegion = (req, res) => {
    const idRegion = req.params.id;
    Region.deleteRegion(idRegion, (err, results) => {
        if (err) {
            console.error('Erreur lors de la suppression de la région :', err.message);
            res.status(500).json({ error: 'Erreur lors de la suppression de la région' });
        } else {
            res.status(200).json({ message: 'Région supprimée avec succès' });
        }
    });
};
