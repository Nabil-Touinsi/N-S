const mysql = require('mysql2'); // Import du client MySQL

// Configuration de la connexion à la base de données
const db = mysql.createConnection({
    host: 'localhost',       // Hôte (local ou distant)
    user: 'root',            // Nom d'utilisateur MySQL
    password: '',            // Mot de passe (vide si non configuré)
    database: 'neigeetsoleil_v2' // Nom de la base de données
});

// Vérification de la connexion
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err.message);
        throw err;
    }
    console.log('Connecté à la base de données MySQL');
});

module.exports = db; // Export de la connexion pour réutilisation
