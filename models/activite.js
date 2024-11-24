const db = require('../config/db');

const Activite = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM Activite';
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = 'SELECT * FROM Activite WHERE idActivite = ?';
        db.query(sql, [id], callback);
    },

    create: (data, callback) => {
        const sql = 'INSERT INTO Activite (Libelle, Tarif) VALUES (?, ?)';
        db.query(sql, [data.Libelle, data.Tarif], callback);
    },

    update: (id, data, callback) => {
        const sql = 'UPDATE Activite SET Libelle = ?, Tarif = ? WHERE idActivite = ?';
        db.query(sql, [data.Libelle, data.Tarif, id], callback);
    },

    delete: (id, callback) => {
        const sql = 'DELETE FROM Activite WHERE idActivite = ?';
        db.query(sql, [id], callback);
    }
};



module.exports = Activite;
