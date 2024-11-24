// views/proprietaireView.js

// Vue pour formater la liste des propriétaires
exports.formatProprietaireList = (proprietaires) => {
    return proprietaires.map((proprietaire) => ({
        id: proprietaire.idProprietaire,
        nom: proprietaire.Nom,
        prenom: proprietaire.Prenom,
        adresse: proprietaire.Adresse,
        telephone: proprietaire.Telephone,
        email: proprietaire.Email,
    }));
};

// Vue pour formater un propriétaire unique
exports.formatProprietaire = (proprietaire) => {
    return {
        id: proprietaire.idProprietaire,
        nom: proprietaire.Nom,
        prenom: proprietaire.Prenom,
        adresse: proprietaire.Adresse,
        telephone: proprietaire.Telephone,
        email: proprietaire.Email,
    };
};

// Vue pour les propriétaires avec habitations
exports.formatProprietairesWithHabitations = (proprietaires) => {
    return proprietaires.map((proprietaire) => ({
        id: proprietaire.idProprietaire,
        nom: proprietaire.Nom,
        prenom: proprietaire.Prenom,
        nombreHabitations: proprietaire.NombreHabitations,
    }));
};

// Vue pour confirmer la création d'un propriétaire
exports.formatCreatedProprietaire = (id) => {
    return {
        message: 'Propriétaire créé avec succès',
        idProprietaire: id,
    };
};

// Vue pour confirmer la suppression d'un propriétaire
exports.formatDeletedProprietaire = () => {
    return {
        message: 'Propriétaire supprimé avec succès',
    };
};
