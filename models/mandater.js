const db = require('../config/db');

class Mandater {
  static getAll(callback) {
    const query = 'SELECT * FROM Mandater';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des relations Mandater :', err);
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  }

  static create(data, callback) {
    const query = 'INSERT INTO Mandater (idProprietaire, idLocataire) VALUES (?, ?)';
    db.query(query, [data.idProprietaire, data.idLocataire], (err, results) => {
      if (err) {
        console.error('Erreur lors de l\'insertion dans Mandater :', err);
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  }
}

module.exports = Mandater;
