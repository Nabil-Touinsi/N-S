const db = require('../config/db');

// Récupérer toutes les saisons
exports.getAll = (callback) => {
    const sql = 'SELECT * FROM saison';
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Récupérer une saison par ID
exports.getById = (id, callback) => {
    const sql = 'SELECT * FROM saison WHERE idSaison = ?';
    db.query(sql, [id], (err, results) => {
        callback(err, results[0]);
    });
};

// Ajouter une saison
exports.create = (data, callback) => {
    const sql = 'INSERT INTO saison (NomSaison, DateDebut, DateFin) VALUES (?, ?, ?)';
    db.query(sql, [data.nomSaison, data.dateDebut, data.dateFin], (err, result) => {
        callback(err, result);
    });
};

// Mettre à jour une saison
exports.update = (id, data, callback) => {
    const sql = 'UPDATE saison SET NomSaison = ?, DateDebut = ?, DateFin = ? WHERE idSaison = ?';
    db.query(sql, [data.nomSaison, data.dateDebut, data.dateFin, id], (err, result) => {
        callback(err, result);
    });
};

// Supprimer une saison
exports.delete = (id, callback) => {
    const sql = 'DELETE FROM saison WHERE idSaison = ?';
    db.query(sql, [id], (err, result) => {
        callback(err, result);
    });
};
