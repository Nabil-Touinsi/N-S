// views/regionView.js

// Vue pour formater la liste des régions
exports.formatRegionList = (regions) => {
    return regions.map((region) => ({
        id: region.idRegion,
        name: region.NomRegion,
        label: region.Libelle,
    }));
};

// Vue pour formater une région unique
exports.formatRegion = (region) => {
    return {
        id: region.idRegion,
        name: region.NomRegion,
        label: region.Libelle,
    };
};

// Vue pour confirmer la création d'une région
exports.formatCreatedRegion = (id) => {
    return {
        message: 'Région créée avec succès',
        idRegion: id,
    };
};

// Vue pour confirmer la suppression d'une région
exports.formatDeletedRegion = () => {
    return {
        message: 'Région supprimée avec succès',
    };
};
