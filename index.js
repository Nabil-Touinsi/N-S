const db = require('./config/db'); // Import de la connexion
const express = require('express'); // Import d'Express
const cors = require('cors');
const app = express();

// Activer CORS pour toutes les requêtes
app.use(cors()); 
// Middleware pour parser les requêtes JSON
app.use(express.json());

const serviceRoutes = require('./routes/serviceRoutes');
const mandaterRoutes = require('./routes/mandaterRoutes');
const situerRoutes = require('./routes/situerRoutes');
const activiteRoutes = require('./routes/activiteRoutes');
const regionRoutes = require('./routes/regionRoutes');  
const etreDeTypeRoutes = require('./routes/etreDeTypeRoutes');
const typeLocationRoutes = require('./routes/TypeLocationRoutes');
const equiperRoutes = require('./routes/equiperRoutes');
const definirRoutes = require('./routes/definirRoutes');
const catalogueRoutes = require('./routes/catalogueRoutes');
const associerRoutes = require('./routes/associerRoutes');
const stationRoutes = require('./routes/stationRoutes');
const saisonRoutes = require('./routes/saisonRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const locataireRoutes = require('./routes/locataireRoutes');
const habitationRoutes = require('./routes/habitationRoutes');
const equipementRoutes = require('./routes/equipementRoutes');
const contratRoutes = require('./routes/contratRoutes');
const proprietaireRoutes = require('./routes/proprietaireRoutes');

app.use('/api/habitations', habitationRoutes);
app.use('/api/equipements', equipementRoutes);
app.use('/api/contrats', contratRoutes);
app.use('/api/proprietaires', proprietaireRoutes);
app.use('/api/locataires', locataireRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/saisons', saisonRoutes);
app.use('/api/stations', stationRoutes);
app.use('/api/associer', associerRoutes);
app.use('/api/catalogues', catalogueRoutes);
app.use('/api/definir', definirRoutes);
app.use('/api/equiper', equiperRoutes);
app.use('/api/typelocations', typeLocationRoutes);
app.use('/api/etreDeType', etreDeTypeRoutes);
app.use('/api/regions', regionRoutes);
app.use('/api/activites', activiteRoutes);
app.use('/api/situer', situerRoutes);
app.use('/api/mandater', mandaterRoutes);
app.use('/api/services', serviceRoutes);

// Démarrer le serveur
app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
