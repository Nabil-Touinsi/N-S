const db = require('../config/db'); // Import de la connexion à la base de données

// Fonction pour récupérer tous les propriétaires
exports.getAll = (callback) => {
    const sql = 'SELECT * FROM proprietaire';
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};
// Récupérer un propriétaire par ID
exports.getById = (id, callback) => {
    const sql = 'SELECT * FROM proprietaire WHERE idProprietaire = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            callback(err, null); // Envoie l'erreur au callback
        } else {
            callback(null, results[0]); // Retourne le propriétaire trouvé (ou undefined s'il n'existe pas)
        }
    });
};

exports.getProprietairesWithHabitations = (callback) => {
    const sql = `
        SELECT p.idProprietaire, p.Nom, p.Prenom, COUNT(h.idHabitation) AS NombreHabitations
        FROM proprietaire p
        LEFT JOIN habitations h ON p.idProprietaire = h.idProprietaire
        GROUP BY p.idProprietaire;
    `;
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};



// Fonction pour ajouter un propriétaire
exports.create = (data, callback) => {
    const { nom, prenom, adresse, telephone, email } = data;
    const sql = 'INSERT INTO proprietaire (Nom, Prenom, Adresse, Telephone, Email) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nom, prenom, adresse, telephone, email], (err, result) => {
        callback(err, result);
    });
};

// Fonction pour mettre à jour un propriétaire
exports.update = (id, data, callback) => {
    const { nom, prenom, adresse, telephone, email } = data;
    const sql = 'UPDATE proprietaire SET Nom = ?, Prenom = ?, Adresse = ?, Telephone = ?, Email = ? WHERE idProprietaire = ?';
    db.query(sql, [nom, prenom, adresse, telephone, email, id], (err, result) => {
        callback(err, result);
    });
};

// Fonction pour supprimer un propriétaire
exports.delete = (id, callback) => {
    const sql = 'DELETE FROM proprietaire WHERE idProprietaire = ?';
    db.query(sql, [id], (err, result) => {
        callback(err, result);
    });
};
