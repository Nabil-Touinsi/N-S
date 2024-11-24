const db = require('../config/db'); // Connexion à la base de données

// Récupérer toutes les réservations
exports.getAll = (callback) => {
    const sql = 'SELECT * FROM reservation';
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Récupérer une réservation par ID
exports.getById = (id, callback) => {
    const sql = 'SELECT * FROM reservation WHERE idReservation = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results[0]);
        }
    });
};

// Ajouter une réservation
exports.create = (data, callback) => {
    const {
        dateReservation,
        statut,
        dateArrivee,
        dateDepart,
        montantAcompte,
        montantSolde,
        caution,
        idLocataire,
        idHabitation,
    } = data;
    const sql = `
        INSERT INTO reservation 
        (DateReservation, Statut, DateArrivee, DateDepart, MontantAcompte, MontantSolde, Caution, idLocataire, idHabitation) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(
        sql,
        [
            dateReservation,
            statut,
            dateArrivee,
            dateDepart,
            montantAcompte,
            montantSolde,
            caution,
            idLocataire,
            idHabitation,
        ],
        (err, result) => {
            callback(err, result);
        }
    );
};

// Mettre à jour une réservation
exports.update = (id, data, callback) => {
    const {
        dateReservation,
        statut,
        dateArrivee,
        dateDepart,
        montantAcompte,
        montantSolde,
        caution,
        idLocataire,
        idHabitation,
    } = data;
    const sql = `
        UPDATE reservation 
        SET DateReservation = ?, Statut = ?, DateArrivee = ?, DateDepart = ?, MontantAcompte = ?, MontantSolde = ?, Caution = ?, idLocataire = ?, idHabitation = ?
        WHERE idReservation = ?
    `;
    db.query(
        sql,
        [
            dateReservation,
            statut,
            dateArrivee,
            dateDepart,
            montantAcompte,
            montantSolde,
            caution,
            idLocataire,
            idHabitation,
            id,
        ],
        (err, result) => {
            callback(err, result);
        }
    );
};

// Supprimer une réservation
exports.delete = (id, callback) => {
    const sql = 'DELETE FROM reservation WHERE idReservation = ?';
    db.query(sql, [id], (err, result) => {
        callback(err, result);
    });
};
