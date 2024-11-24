const db = require('../config/db');

// Récupérer tous les contrats
exports.getAll = (callback) => {
    const sql = 'SELECT * FROM contrat';
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Récupérer un contrat par ID
exports.getById = (id, callback) => {
    const sql = 'SELECT * FROM contrat WHERE idContrat = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results[0]);
        }
    });
};

// Créer un contrat
exports.create = (data, callback) => {
    const { dateSignature, duree, montantTotal, dateFin } = data;
    const sql = 'INSERT INTO contrat (DateSignature, Duree, MontantTotal, DateFin) VALUES (?, ?, ?, ?)';
    db.query(sql, [dateSignature, duree, montantTotal, dateFin], (err, result) => {
        callback(err, result);
    });
};

// Mettre à jour un contrat
exports.update = (id, data, callback) => {
    const { dateSignature, duree, montantTotal, dateFin } = data;
    const sql = 'UPDATE contrat SET DateSignature = ?, Duree = ?, MontantTotal = ?, DateFin = ? WHERE idContrat = ?';
    db.query(sql, [dateSignature, duree, montantTotal, dateFin, id], (err, result) => {
        callback(err, result);
    });
};

// Supprimer un contrat
exports.delete = (id, callback) => {
    const sql = 'DELETE FROM contrat WHERE idContrat = ?';
    db.query(sql, [id], (err, result) => {
        callback(err, result);
    });
};
