const db = require('../config/db');

// Récupérer tous les équipements
exports.getAll = (callback) => {
    const sql = 'SELECT * FROM equipement';
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Récupérer un équipement par ID
exports.getById = (id, callback) => {
    const sql = 'SELECT * FROM equipement WHERE idEquipement = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results[0]);
        }
    });
};

// Créer un équipement
exports.create = (data, callback) => {
    const { nomEquipement, description, quantite } = data;
    const sql = 'INSERT INTO equipement (NomEquipement, Description, Quantite) VALUES (?, ?, ?)';
    db.query(sql, [nomEquipement, description, quantite], (err, result) => {
        callback(err, result);
    });
};

// Mettre à jour un équipement
exports.update = (id, data, callback) => {
    const { nomEquipement, description, quantite } = data;
    const sql = 'UPDATE equipement SET NomEquipement = ?, Description = ?, Quantite = ? WHERE idEquipement = ?';
    db.query(sql, [nomEquipement, description, quantite, id], (err, result) => {
        callback(err, result);
    });
};

// Supprimer un équipement
exports.delete = (id, callback) => {
    const sql = 'DELETE FROM equipement WHERE idEquipement = ?';
    db.query(sql, [id], (err, result) => {
        callback(err, result);
    });
};
