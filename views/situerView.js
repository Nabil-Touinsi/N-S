// views/situerView.js

// Formater la liste des relations "Situer"
exports.formatSituerList = (relations) => {
    return relations.map((relation) => ({
        id: relation.idSituer,
        stationName: relation.StationNom,
        regionName: relation.RegionNom,
    }));
};

// Formater une relation unique "Situer"
exports.formatSituer = (relation) => {
    return {
        id: relation.idSituer,
        stationName: relation.StationNom,
        regionName: relation.RegionNom,
    };
};

// Vue pour confirmer la création d'une relation "Situer"
exports.formatCreatedSituer = (id) => {
    return {
        message: 'Relation Situer créée avec succès',
        situerId: id,
    };
};

// Vue pour confirmer la suppression d'une relation "Situer"
exports.formatDeletedSituer = () => {
    return {
        message: 'Relation Situer supprimée avec succès',
    };
};
