const EtreDeType = require('../models/EtreDeType');
const EtreDeTypeView = require('../views/etreDeTypeView');

// Ajouter un type à une habitation
exports.addTypeToHabitation = (req, res) => {
    const { idHabitation, idType } = req.body;

    EtreDeType.addTypeToHabitation(idHabitation, idType, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erreur lors de l'ajout du type à l'habitation" });
        } else {
            res.status(201).json(EtreDeTypeView.formatAddedType(result.insertId));
        }
    });
};

// Supprimer un type d'une habitation
exports.removeTypeFromHabitation = (req, res) => {
    const { idHabitation, idType } = req.body;

    EtreDeType.removeTypeFromHabitation(idHabitation, idType, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erreur lors de la suppression du type de l'habitation" });
        } else {
            res.status(200).json(EtreDeTypeView.formatDeletedType());
        }
    });
};

// Récupérer tous les types d'une habitation
exports.getTypesByHabitation = (req, res) => {
    const idHabitation = req.params.id;

    EtreDeType.getTypesByHabitation(idHabitation, (err, results) => {
        if (err) {
            res.status(500).json({ error: "Erreur lors de la récupération des types de l'habitation" });
        } else {
            res.status(200).json(EtreDeTypeView.formatTypesByHabitation(results));
        }
    });
};
