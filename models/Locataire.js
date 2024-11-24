const db = require('../config/db'); // Connexion à la base de données

// Récupérer tous les locataires
exports.getAll = (callback) => {
    const sql = 'SELECT * FROM locataire';
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Récupérer un locataire par ID
exports.getById = (id, callback) => {
    const sql = 'SELECT * FROM locataire WHERE idLocataire = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results[0]);
        }
    });
};

// Ajouter un locataire
exports.create = (data, callback) => {
    const { nom, prenom, email, telephone } = data;
    const sql = 'INSERT INTO locataire (Nom, Prenom, Email, Telephone) VALUES (?, ?, ?, ?)';
    db.query(sql, [nom, prenom, email, telephone], (err, result) => {
        callback(err, result);
    });
};

// Mettre à jour un locataire
exports.update = (id, data, callback) => {
    const { nom, prenom, email, telephone } = data;
    const sql = 'UPDATE locataire SET Nom = ?, Prenom = ?, Email = ?, Telephone = ? WHERE idLocataire = ?';
    db.query(sql, [nom, prenom, email, telephone, id], (err, result) => {
        callback(err, result);
    });
};

// Supprimer un locataire
exports.delete = (id, callback) => {
    const sql = 'DELETE FROM locataire WHERE idLocataire = ?';
    db.query(sql, [id], (err, result) => {
        callback(err, result);
    });
};
