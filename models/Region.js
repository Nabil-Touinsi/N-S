const db = require('../config/db');

// Fonction pour récupérer toutes les régions
exports.getAllRegions = (callback) => {
    const sql = `SELECT * FROM region`;
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Fonction pour récupérer une région par son ID
exports.getRegionById = (idRegion, callback) => {
    const sql = `SELECT * FROM region WHERE idRegion = ?`;
    db.query(sql, [idRegion], (err, results) => {
        callback(err, results);
    });
};

// Fonction pour ajouter une région
exports.addRegion = (region, callback) => {
    const sql = `INSERT INTO region (NomRegion, Libelle) VALUES (?, ?)`;
    db.query(sql, [region.NomRegion, region.Libelle], (err, results) => {
        callback(err, results);
    });
};

// Fonction pour mettre à jour une région
exports.updateRegion = (idRegion, region, callback) => {
    const sql = `UPDATE region SET NomRegion = ?, Libelle = ? WHERE idRegion = ?`;
    db.query(sql, [region.NomRegion, region.Libelle, idRegion], (err, results) => {
        callback(err, results);
    });
};

// Fonction pour supprimer une région
exports.deleteRegion = (idRegion, callback) => {
    const sql = `DELETE FROM region WHERE idRegion = ?`;
    db.query(sql, [idRegion], (err, results) => {
        callback(err, results);
    });
};
