const Mandater = require('../models/mandater');
const mandaterView = require('../views/mandaterView');

exports.getAll = (req, res) => {
  Mandater.getAll((err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erreur lors de la récupération des relations Mandater' });
      return;
    }
    res.json(results);
  });
};

exports.create = (req, res) => {
  const data = req.body;

  if (!data.idProprietaire || !data.idLocataire) {
    res.status(400).json({ error: 'Veuillez fournir idProprietaire et idLocataire' });
    return;
  }

  Mandater.create(data, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erreur lors de l\'ajout d\'une relation Mandater' });
      return;
    }
    res.status(201).json({ message: 'Relation Mandater ajoutée avec succès', id: results.insertId });
  });
};
