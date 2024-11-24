const db = require('../config/db'); // Connexion à la base de données

const Service = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM service ORDER BY ordre';
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM service WHERE id = ?';
        db.query(sql, [id], callback);
    },
    create: (service, callback) => {
        const sql = 'INSERT INTO service (titre, description, icone, ordre) VALUES (?, ?, ?, ?)';
        db.query(sql, [service.titre, service.description, service.icone, service.ordre], callback);
    },
    update: (id, service, callback) => {
        const sql = 'UPDATE service SET titre = ?, description = ?, icone = ?, ordre = ? WHERE id = ?';
        db.query(sql, [service.titre, service.description, service.icone, service.ordre, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM service WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Service;
