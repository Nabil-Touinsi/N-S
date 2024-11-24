// views/saisonView.js

// Formater la liste des saisons
exports.formatSaisonList = (saisons) => {
    return saisons.map((saison) => ({
        id: saison.idSaison,
        name: saison.NomSaison,
        startDate: saison.DateDebut,
        endDate: saison.DateFin,
    }));
};

// Formater une saison unique
exports.formatSaison = (saison) => {
    return {
        id: saison.idSaison,
        name: saison.NomSaison,
        startDate: saison.DateDebut,
        endDate: saison.DateFin,
    };
};

// Vue pour confirmer la création d'une saison
exports.formatCreatedSaison = (id) => {
    return {
        message: 'Saison créée avec succès',
        saisonId: id,
    };
};

// Vue pour confirmer la suppression d'une saison
exports.formatDeletedSaison = () => {
    return {
        message: 'Saison supprimée avec succès',
    };
};
