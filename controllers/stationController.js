const Station = require('../models/Station');
const stationView = require('../views/stationView');

// Récupérer toutes les stations
exports.getAllStations = (req, res) => {
    Station.getAll((err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des stations :', err);
            res.status(500).json({ error: 'Erreur lors de la récupération des stations' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Récupérer une station par ID
exports.getStationById = (req, res) => {
    const { id } = req.params;
    Station.getById(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la récupération de la station :', err);
            res.status(500).json({ error: 'Erreur lors de la récupération de la station' });
        } else if (!result) {
            res.status(404).json({ error: 'Station non trouvée' });
        } else {
            res.status(200).json(result);
        }
    });
};

// Ajouter une station
exports.addStation = (req, res) => {
    const data = req.body;
    Station.create(data, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de la station :', err);
            res.status(500).json({ error: 'Erreur lors de l\'ajout de la station' });
        } else {
            res.status(201).json({ message: 'Station ajoutée avec succès', id: result.insertId });
        }
    });
};

// Modifier une station
exports.updateStation = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Station.update(id, data, (err, result) => {
        if (err) {
            console.error('Erreur lors de la modification de la station :', err);
            res.status(500).json({ error: 'Erreur lors de la modification de la station' });
        } else {
            res.status(200).json({ message: 'Station modifiée avec succès' });
        }
    });
};

// Supprimer une station
exports.deleteStation = (req, res) => {
    const { id } = req.params;
    Station.delete(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression de la station :', err);
            res.status(500).json({ error: 'Erreur lors de la suppression de la station' });
        } else {
            res.status(200).json({ message: 'Station supprimée avec succès' });
        }
    });
};
