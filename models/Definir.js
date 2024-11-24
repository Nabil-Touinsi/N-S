const db = require('../config/db');

// Récupérer tous les tarifs pour toutes les saisons
exports.getAllTarifs = (callback) => {
    const sql = `
        SELECT d.idDefinir, s.NomSaison, d.TarifMinSaison, d.TarifMaxSaison, d.TarifMoySaison
        FROM definir d
        JOIN saison s ON d.idSaison = s.idSaison
    `;
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Ajouter un nouveau tarif pour une saison
exports.addTarif = (tarifData, callback) => {
    const sql = `
        INSERT INTO definir (idSaison, TarifMinSaison, TarifMaxSaison, TarifMoySaison)
        VALUES (?, ?, ?, ?)
    `;
    const values = [
        tarifData.idSaison,
        tarifData.TarifMinSaison,
        tarifData.TarifMaxSaison,
        tarifData.TarifMoySaison,
    ];
    db.query(sql, values, (err, results) => {
        callback(err, results);
    });
};

// Mettre à jour les tarifs d'une saison
exports.updateTarif = (idDefinir, tarifData, callback) => {
    const sql = `
        UPDATE definir
        SET idSaison = ?, TarifMinSaison = ?, TarifMaxSaison = ?, TarifMoySaison = ?
        WHERE idDefinir = ?
    `;
    const values = [
        tarifData.idSaison,
        tarifData.TarifMinSaison,
        tarifData.TarifMaxSaison,
        tarifData.TarifMoySaison,
        idDefinir,
    ];
    db.query(sql, values, (err, results) => {
        callback(err, results);
    });
};

// Supprimer un tarif
exports.deleteTarif = (idDefinir, callback) => {
    const sql = `DELETE FROM definir WHERE idDefinir = ?`;
    db.query(sql, [idDefinir], (err, results) => {
        callback(err, results);
    });
};
