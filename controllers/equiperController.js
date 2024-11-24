const Equiper = require('../models/Equiper');
const EquiperView = require('../views/equiperView');

// Ajouter un équipement à une habitation
exports.addEquipmentToHabitation = (req, res) => {
    const { idEquipement, idHabitation, quantite } = req.body;
    Equiper.addEquipmentToHabitation(idEquipement, idHabitation, quantite, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de l\'équipement à l\'habitation :', err.message);
            res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'équipement' });
        } else {
            res.status(201).json({ message: 'Équipement ajouté avec succès', id: result.insertId });
        }
    });
};

// Récupérer les équipements d'une habitation
exports.getEquipmentsByHabitation = (req, res) => {
    const { idHabitation } = req.params;
    Equiper.getEquipmentsByHabitation(idHabitation, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des équipements :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération des équipements' });
        } else {
            res.status(200).json(results);
        }
    });
};
