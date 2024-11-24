const db = require('../config/db');

// Fonction pour récupérer toutes les associations
exports.getAllAssociations = (callback) => {
    const sql = `
        SELECT r.idReservation, r.DateReservation, r.DateArrivee, r.DateDepart,
               s.idSaison, s.NomSaison, s.DateDebut, s.DateFin
        FROM associer a
        JOIN reservation r ON a.idReservation = r.idReservation
        JOIN saison s ON a.idSaison = s.idSaison
    `;
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Fonction pour ajouter une association
exports.createAssociation = (data, callback) => {
    const { idReservation, idSaison } = data;
    const sql = 'INSERT INTO associer (idReservation, idSaison) VALUES (?, ?)';
    db.query(sql, [idReservation, idSaison], (err, results) => {
        callback(err, results);
    });
};

// Fonction pour supprimer une association
exports.deleteAssociation = (id, callback) => {
    const sql = 'DELETE FROM associer WHERE idAssocier = ?';
    db.query(sql, [id], (err, results) => {
        callback(err, results);
    });
};
