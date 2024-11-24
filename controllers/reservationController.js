const Reservation = require('../models/reservation'); // Import du modèle
const reservationView = require('../views/reservationView');


// Récupérer toutes les réservations
exports.getAllReservations = (req, res) => {
    Reservation.getAll((err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération des réservations' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Récupérer une réservation par ID
exports.getReservationById = (req, res) => {
    const { id } = req.params;
    Reservation.getById(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération de la réservation' });
        } else if (!result) {
            res.status(404).json({ error: 'Réservation non trouvée' });
        } else {
            res.status(200).json(result);
        }
    });
};

exports.getReservationsWithLocataire = (req, res) => {
    const sql = `
        SELECT r.idReservation, r.DateReservation, r.DateArrivee, r.DateDepart, 
               r.idLocataire, r.idHabitation, l.Nom AS LocataireNom, h.NumAppart AS Appartement
        FROM reservation r
        JOIN locataire l ON r.idLocataire = l.idLocataire
        JOIN habitations h ON r.idHabitation = h.idHabitation
    `;
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération des réservations avec locataires' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Ajouter une réservation
exports.addReservation = (req, res) => {
    const data = req.body;
    Reservation.create(data, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de l\'ajout de la réservation' });
        } else {
            res.status(201).json({ message: 'Réservation ajoutée avec succès', id: result.insertId });
        }
    });
};

// Mettre à jour une réservation
exports.updateReservation = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Reservation.update(id, data, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la mise à jour de la réservation' });
        } else {
            res.status(200).json({ message: 'Réservation mise à jour avec succès' });
        }
    });
};

// Supprimer une réservation
exports.deleteReservation = (req, res) => {
    const { id } = req.params;
    Reservation.delete(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la suppression de la réservation' });
        } else {
            res.status(200).json({ message: 'Réservation supprimée avec succès' });
        }
    });
};
