const db = require('../config/db');

// Récupérer tous les types de location
exports.getAll = (callback) => {
    const sql = 'SELECT * FROM typelocation';
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Ajouter un type de location
exports.add = (data, callback) => {
    const sql = 'INSERT INTO typelocation (CodeType, Description, SurfaceMoy) VALUES (?, ?, ?)';
    db.query(sql, [data.CodeType, data.Description, data.SurfaceMoy], (err, results) => {
        callback(err, results);
    });
};

// Récupérer un type de location par ID
exports.getById = (id, callback) => {
    const sql = 'SELECT * FROM typelocation WHERE idType = ?';
    db.query(sql, [id], (err, results) => {
        callback(err, results[0]);
    });
};

// Mettre à jour un type de location
exports.update = (id, data, callback) => {
    const sql = 'UPDATE typelocation SET CodeType = ?, Description = ?, SurfaceMoy = ? WHERE idType = ?';
    db.query(sql, [data.CodeType, data.Description, data.SurfaceMoy, id], (err, results) => {
        callback(err, results);
    });
};

// Supprimer un type de location
exports.delete = (id, callback) => {
    const sql = 'DELETE FROM typelocation WHERE idType = ?';
    db.query(sql, [id], (err, results) => {
        callback(err, results);
    });
};
