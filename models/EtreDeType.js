const db = require('../config/db');

// Ajouter un type à une habitation
exports.addTypeToHabitation = (idHabitation, idType, callback) => {
    const sql = `
        INSERT INTO etredeType (idHabitation, idType)
        VALUES (?, ?)
    `;
    db.query(sql, [idHabitation, idType], (err, results) => {
        callback(err, results);
    });
};

// Supprimer un type d'une habitation
exports.removeTypeFromHabitation = (idHabitation, idType, callback) => {
    const sql = `
        DELETE FROM etredeType
        WHERE idHabitation = ? AND idType = ?
    `;
    db.query(sql, [idHabitation, idType], (err, results) => {
        callback(err, results);
    });
};

// Récupérer tous les types d'une habitation
exports.getTypesByHabitation = (idHabitation, callback) => {
    const sql = `
        SELECT t.*
        FROM typelocation t
        JOIN etredeType e ON t.idType = e.idType
        WHERE e.idHabitation = ?
    `;
    db.query(sql, [idHabitation], (err, results) => {
        callback(err, results);
    });
};
