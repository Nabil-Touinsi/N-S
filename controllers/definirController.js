const Definir = require('../models/Definir');
const DefinirView = require('../views/definirView');

exports.getAllTarifs = (req, res) => {
    Definir.getAllTarifs((err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des tarifs :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération des tarifs' });
        } else {
            res.status(200).json(results);
        }
    });
};

exports.addTarif = (req, res) => {
    const tarifData = req.body;
    Definir.addTarif(tarifData, (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'ajout du tarif :', err.message);
            res.status(500).json({ error: 'Erreur lors de l\'ajout du tarif' });
        } else {
            res.status(201).json({ message: 'Tarif ajouté avec succès', idDefinir: results.insertId });
        }
    });
};

exports.updateTarif = (req, res) => {
    const { id } = req.params;
    const tarifData = req.body;
    Definir.updateTarif(id, tarifData, (err, results) => {
        if (err) {
            console.error('Erreur lors de la mise à jour du tarif :', err.message);
            res.status(500).json({ error: 'Erreur lors de la mise à jour du tarif' });
        } else {
            res.status(200).json({ message: 'Tarif mis à jour avec succès' });
        }
    });
};

exports.deleteTarif = (req, res) => {
    const { id } = req.params;
    Definir.deleteTarif(id, (err, results) => {
        if (err) {
            console.error('Erreur lors de la suppression du tarif :', err.message);
            res.status(500).json({ error: 'Erreur lors de la suppression du tarif' });
        } else {
            res.status(200).json({ message: 'Tarif supprimé avec succès' });
        }
    });
};
