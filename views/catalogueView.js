// catalogueView.js

// Vue pour formater les données des catalogues
exports.formatCatalogueList = (catalogues) => {
    return catalogues.map((catalogue) => ({
        catalogueId: catalogue.idCatalogue,
        year: catalogue.Annee,
        publicationDate: catalogue.DatePublication,
    }));
};

// Vue pour formater un seul catalogue par ID
exports.formatCatalogueById = (catalogue) => {
    return {
        catalogueId: catalogue.idCatalogue,
        year: catalogue.Annee,
        publicationDate: catalogue.DatePublication,
    };
};

// Vue pour les habitations liées à un catalogue
exports.formatHabitationsByCatalogue = (habitations) => {
    return habitations.map((habitation) => ({
        habitationId: habitation.idHabitation,
        address: habitation.Adresse,
        capacity: habitation.Capacite,
        surface: habitation.Surface,
        orientation: habitation.Orientation,
        balcony: habitation.Balcon,
    }));
};

// Vue pour formater une réponse lors de la création d’un catalogue
exports.formatCreatedCatalogue = (id) => {
    return {
        message: 'Catalogue créé avec succès',
        catalogueId: id,
    };
};

// Vue pour formater une réponse lors de la suppression d’un catalogue
exports.formatDeletedCatalogue = () => {
    return {
        message: 'Catalogue supprimé avec succès',
    };
};
