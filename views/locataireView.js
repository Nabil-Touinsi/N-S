// views/locataireView.js

// Vue pour formater les données des locataires
exports.formatLocataireList = (locataires) => {
    return locataires.map((locataire) => ({
        id: locataire.idLocataire,
        nom: locataire.Nom,
        prenom: locataire.Prenom,
        email: locataire.Email,
        telephone: locataire.Telephone,
    }));
};

// Vue pour formater une réponse lors de la création d'un locataire
exports.formatCreatedLocataire = (id) => {
    return {
        message: 'Locataire créé avec succès',
        locataireId: id,
    };
};

// Vue pour formater une réponse lors de la suppression d'un locataire
exports.formatDeletedLocataire = () => {
    return {
        message: 'Locataire supprimé avec succès',
    };
};
