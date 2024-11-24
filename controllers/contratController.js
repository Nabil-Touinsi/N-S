const Contrat = require('../models/Contrat');
const ContractView = require('../views/contratView');

// Récupérer tous les contrats
exports.getAllContrats = (req, res) => {
    Contrat.getAll((err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des contrats :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération des contrats' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Récupérer un contrat par ID
exports.getContratById = (req, res) => {
    const { id } = req.params;
    Contrat.getById(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la récupération du contrat :', err.message);
            res.status(500).json({ error: 'Erreur lors de la récupération du contrat' });
        } else if (!result) {
            res.status(404).json({ error: 'Contrat non trouvé' });
        } else {
            res.status(200).json(result);
        }
    });
};

// Ajouter un contrat
exports.addContrat = (req, res) => {
    const data = req.body;
    Contrat.create(data, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout du contrat :', err.message);
            res.status(500).json({ error: 'Erreur lors de l\'ajout du contrat' });
        } else {
            res.status(201).json({ message: 'Contrat ajouté avec succès', id: result.insertId });
        }
    });
};

// Mettre à jour un contrat
exports.updateContrat = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Contrat.update(id, data, (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour du contrat :', err.message);
            res.status(500).json({ error: 'Erreur lors de la mise à jour du contrat' });
        } else {
            res.status(200).json({ message: 'Contrat mis à jour avec succès' });
        }
    });
};

// Supprimer un contrat
exports.deleteContrat = (req, res) => {
    const { id } = req.params;
    Contrat.delete(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression du contrat :', err.message);
            res.status(500).json({ error: 'Erreur lors de la suppression du contrat' });
        } else {
            res.status(200).json({ message: 'Contrat supprimé avec succès' });
        }
    });
};
