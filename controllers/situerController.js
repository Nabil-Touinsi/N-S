const Situer = require('../models/situer');
const situerView = require('../views/situerView');

exports.getAll = (req, res) => {
    Situer.getAll((err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération des relations Situer' });
        } else {
            res.json(results);
        }
    });
};

exports.getById = (req, res) => {
    const id = req.params.id;
    Situer.getById(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération de la relation Situer' });
        } else {
            res.json(results);
        }
    });
};

exports.create = (req, res) => {
    const data = req.body;
    Situer.create(data, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la création de la relation Situer' });
        } else {
            res.status(201).json({ id: results.insertId, ...data });
        }
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Situer.delete(id, (err) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la suppression de la relation Situer' });
        } else {
            res.status(204).end();
        }
    });
};
