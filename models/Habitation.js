const db = require('../config/db');

// Récupérer toutes les habitations
exports.getAll = (callback) => {
    const sql = 'SELECT * FROM habitations';
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Récupérer une habitation par ID
exports.getById = (id, callback) => {
    const sql = 'SELECT * FROM habitations WHERE idHabitation = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results[0]);
        }
    });
};

// Créer une habitation
exports.create = (data, callback) => {
    const { numApp, adresse, immeuble, capacite, surface, complement, orientation, balcon } = data;
    const sql = `
        INSERT INTO habitations 
        (NumApp, Adresse, Immeuble, Capacite, Surface, Complement, Orientation, Balcon) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(sql, [numApp, adresse, immeuble, capacite, surface, complement, orientation, balcon], (err, result) => {
        callback(err, result);
    });
};

// Mettre à jour une habitation
exports.update = (id, data, callback) => {
    const { numApp, adresse, immeuble, capacite, surface, complement, orientation, balcon } = data;
    const sql = `
        UPDATE habitations 
        SET NumApp = ?, Adresse = ?, Immeuble = ?, Capacite = ?, Surface = ?, Complement = ?, Orientation = ?, Balcon = ?
        WHERE idHabitation = ?
    `;
    db.query(sql, [numApp, adresse, immeuble, capacite, surface, complement, orientation, balcon, id], (err, result) => {
        callback(err, result);
    });
};

// Supprimer une habitation
exports.delete = (id, callback) => {
    const sql = 'DELETE FROM habitations WHERE idHabitation = ?';
    db.query(sql, [id], (err, result) => {
        callback(err, result);
    });
};
