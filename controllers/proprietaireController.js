const db = require('../config/db'); // Import de la connexion à la base de données
const proprietaireView = require('../views/proprietaireView');

exports.getAllProprietaires = (req, res) => {
    const sql = 'SELECT * FROM proprietaire'; // Requête SQL pour récupérer les données
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des propriétaires :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération des propriétaires' });
        } else {
            res.status(200).json(results); // Retourne les données au format JSON
        }
    });
};
exports.getProprietaireById = (req, res) => {
    const { id } = req.params; // Récupérer l'ID à partir des paramètres de la requête
    const sql = 'SELECT * FROM proprietaire WHERE idProprietaire = ?'; // Requête SQL
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération du propriétaire :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération du propriétaire' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Propriétaire non trouvé' });
        } else {
            res.status(200).json(results[0]); // Retourne l'objet du propriétaire
        }
    });
};


// Nouvelle fonction pour récupérer le nombre d'habitations par propriétaire
exports.getHabitationsCountByProprietaire = (req, res) => {
    const sql = `
        SELECT p.idProprietaire, p.Nom, p.Prenom, COUNT(h.idHabitation) AS NombreHabitations
        FROM proprietaire p
        LEFT JOIN habitations h ON p.idProprietaire = h.idProprietaire
        GROUP BY p.idProprietaire
    `;

    console.log('Exécution de la requête SQL complète :', sql);

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des données :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        } else if (!results || results.length === 0) {
            console.log('Aucun résultat trouvé');
            res.status(404).json({ error: 'Aucun propriétaire trouvé' });
        } else {
            console.log('Résultats récupérés :', results);
            res.status(200).json(results);
        }
    });
};








exports.addProprietaire = (req, res) => {
    const { nom, prenom, adresse, telephone, email } = req.body;
    const sql = 'INSERT INTO proprietaire (Nom, Prenom, Adresse, Telephone, Email) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nom, prenom, adresse, telephone, email], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout du propriétaire :', err.message);
            res.status(500).json({ error: 'Erreur lors de l\'ajout du propriétaire' });
        } else {
            res.status(201).json({ message: 'Propriétaire ajouté avec succès', id: result.insertId });
        }
    });
};
exports.updateProprietaire = (req, res) => {
    const { id } = req.params;
    const { nom, prenom, adresse, telephone, email } = req.body;
    const sql = 'UPDATE proprietaire SET Nom = ?, Prenom = ?, Adresse = ?, Telephone = ?, Email = ? WHERE idProprietaire = ?';
    db.query(sql, [nom, prenom, adresse, telephone, email, id], (err, result) => {
        if (err) {
            console.error('Erreur lors de la modification du propriétaire :', err.message);
            res.status(500).json({ error: 'Erreur lors de la modification du propriétaire' });
        } else {
            res.status(200).json({ message: 'Propriétaire modifié avec succès' });
        }
    });
};
exports.deleteProprietaire = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM proprietaire WHERE idProprietaire = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression du propriétaire :', err.message);
            res.status(500).json({ error: 'Erreur lors de la suppression du propriétaire' });
        } else {
            res.status(200).json({ message: 'Propriétaire supprimé avec succès' });
        }
    });
};

