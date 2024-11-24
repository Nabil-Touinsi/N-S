const db = require('../config/db'); // Import de la connexion à la base de données

// Fonction pour récupérer tous les catalogues
exports.getAll = (callback) => {
    const sql = 'SELECT * FROM catalogue';
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Fonction pour récupérer un catalogue par ID
exports.getById = (idCatalogue, callback) => {
    const sql = 'SELECT * FROM catalogue WHERE idCatalogue = ?';
    db.query(sql, [idCatalogue], (err, results) => {
        callback(err, results[0]); // Retourne un seul objet
    });
};

// Fonction pour récupérer les habitations d'un catalogue
exports.getHabitationsByCatalogue = (idCatalogue, callback) => {
    const sql = `
        SELECT h.*
        FROM habitations h
        WHERE h.idCatalogue = ?
    `;
    db.query(sql, [idCatalogue], (err, results) => {
        callback(err, results);
    });
};

// Fonction pour ajouter un nouveau catalogue
exports.create = (data, callback) => {
    const sql = 'INSERT INTO catalogue (Annee, DatePublication) VALUES (?, ?)';
    db.query(sql, [data.Annee, data.DatePublication], (err, result) => {
        callback(err, result);
    });
};

// Fonction pour mettre à jour un catalogue
exports.update = (idCatalogue, data, callback) => {
    const sql = 'UPDATE catalogue SET Annee = ?, DatePublication = ? WHERE idCatalogue = ?';
    db.query(sql, [data.Annee, data.DatePublication, idCatalogue], (err, result) => {
        callback(err, result);
    });
};

// Fonction pour supprimer un catalogue
exports.delete = (idCatalogue, callback) => {
    const sql = 'DELETE FROM catalogue WHERE idCatalogue = ?';
    db.query(sql, [idCatalogue], (err, result) => {
        callback(err, result);
    });
};
