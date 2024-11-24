const db = require('../config/db'); // Connexion à la base de données

const Situer = {
    getAll: (callback) => {
        const sql = `
            SELECT Situer.idSituer, Station.Nom AS StationNom, Region.NomRegion AS RegionNom
            FROM Situer
            JOIN Station ON Situer.idStation = Station.idStation
            JOIN Region ON Situer.idRegion = Region.idRegion
        `;
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = `
            SELECT Situer.idSituer, Station.Nom AS StationNom, Region.NomRegion AS RegionNom
            FROM Situer
            JOIN Station ON Situer.idStation = Station.idStation
            JOIN Region ON Situer.idRegion = Region.idRegion
            WHERE Situer.idSituer = ?
        `;
        db.query(sql, [id], callback);
    },

    create: (data, callback) => {
        const sql = 'INSERT INTO Situer (idStation, idRegion) VALUES (?, ?)';
        db.query(sql, [data.idStation, data.idRegion], callback);
    },

    delete: (id, callback) => {
        const sql = 'DELETE FROM Situer WHERE idSituer = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Situer;
