const db = require('../config/db'); // Connexion à la base de données

// Récupérer toutes les stations
exports.getAll = (callback) => {
    const sql = 'SELECT * FROM station';
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Récupérer une station par son ID
exports.getById = (id, callback) => {
    const sql = 'SELECT * FROM station WHERE idStation = ?';
    db.query(sql, [id], (err, result) => {
        callback(err, result[0]);
    });
};

// Ajouter une nouvelle station
exports.create = (data, callback) => {
    const { nom, telMairie, nbHabitants, nbTouristes_ete, nbSkieur_hiver } = data;
    const sql = `INSERT INTO station (Nom, TelMairie, NbHabitants, NbTouristes_ete, NbSkieur_hiver)
                 VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [nom, telMairie, nbHabitants, nbTouristes_ete, nbSkieur_hiver], (err, result) => {
        callback(err, result);
    });
};

// Modifier une station existante
exports.update = (id, data, callback) => {
    const { nom, telMairie, nbHabitants, nbTouristes_ete, nbSkieur_hiver } = data;
    const sql = `UPDATE station 
                 SET Nom = ?, TelMairie = ?, NbHabitants = ?, NbTouristes_ete = ?, NbSkieur_hiver = ? 
                 WHERE idStation = ?`;
    db.query(sql, [nom, telMairie, nbHabitants, nbTouristes_ete, nbSkieur_hiver, id], (err, result) => {
        callback(err, result);
    });
};

// Supprimer une station
exports.delete = (id, callback) => {
    const sql = 'DELETE FROM station WHERE idStation = ?';
    db.query(sql, [id], (err, result) => {
        callback(err, result);
    });
};
