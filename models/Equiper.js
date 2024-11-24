const db = require('../config/db');

// Fonction pour ajouter un équipement à une habitation
exports.addEquipmentToHabitation = (idEquipment, idHabitation, quantity, callback) => {
    const sql = `
        INSERT INTO equiper (idEquipement, idHabitation, Quantite)
        VALUES (?, ?, ?)
    `;
    db.query(sql, [idEquipment, idHabitation, quantity], (err, result) => {
        callback(err, result);
    });
};

// Fonction pour récupérer les équipements d'une habitation
exports.getEquipmentsByHabitation = (idHabitation, callback) => {
    const sql = `
        SELECT e.NomEquipement, e.Description, eq.Quantite
        FROM equiper eq
        JOIN equipement e ON eq.idEquipement = e.idEquipement
        WHERE eq.idHabitation = ?
    `;
    db.query(sql, [idHabitation], (err, results) => {
        callback(err, results);
    });
};
