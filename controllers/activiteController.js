const Activite = require('../models/activite');
const ActiviteView = require('../views/activiteView'); // Import de la vue

exports.getAll = (req, res) => {
    Activite.getAll((err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération des activités' });
        } else {
            res.json(results);
        }
    });
};

exports.getById = (req, res) => {
    const id = req.params.id;
    Activite.getById(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération de l\'activité' });
        } else {
            res.json(results);
        }
    });
};

exports.create = (req, res) => {
    const data = req.body;
    Activite.create(data, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la création de l\'activité' });
        } else {
            res.status(201).json({ id: results.insertId, ...data });
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Activite.update(id, data, (err) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'activité' });
        } else {
            res.json({ id, ...data });
        }
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Activite.delete(id, (err) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la suppression de l\'activité' });
        } else {
            res.status(204).end();
        }
    });
};

