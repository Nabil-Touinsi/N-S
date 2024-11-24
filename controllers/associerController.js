    const Associer = require('../models/Associer');
    const associerView = require('../views/associerView');
    
    // Récupérer toutes les associations
    exports.getAllAssociations = (req, res) => {
        Associer.getAllAssociations((err, results) => {
            if (err) {
                console.error('Erreur lors de la récupération des associations :', err.message);
                res.status(500).json({ error: 'Erreur lors de la récupération des associations' });
            } else {
                res.status(200).json(results);
            }
        });
    };

    // Ajouter une association
    exports.createAssociation = (req, res) => {
        const { idReservation, idSaison } = req.body;
        Associer.createAssociation({ idReservation, idSaison }, (err, results) => {
            if (err) {
                console.error('Erreur lors de l\'ajout de l\'association :', err.message);
                res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'association' });
            } else {
                res.status(201).json({ message: 'Association ajoutée avec succès', id: results.insertId });
            }
        });
    };

    // Supprimer une association
    exports.deleteAssociation = (req, res) => {
        const { id } = req.params;
        Associer.deleteAssociation(id, (err, results) => {
            if (err) {
                console.error('Erreur lors de la suppression de l\'association :', err.message);
                res.status(500).json({ error: 'Erreur lors de la suppression de l\'association' });
            } else {
                res.status(200).json({ message: 'Association supprimée avec succès' });
            }
        });
    };
