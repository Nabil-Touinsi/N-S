// View pour formater la liste des tarifs
exports.formatTarifList = (tarifs) => {
    return tarifs.map((tarif) => ({
        id: tarif.idDefinir,
        saisonName: tarif.NomSaison,
        tarifMin: tarif.TarifMinSaison,
        tarifMax: tarif.TarifMaxSaison,
        tarifMoy: tarif.TarifMoySaison,
    }));
};

// View pour formater la réponse lors de la création d'un tarif
exports.formatCreatedTarif = (id) => {
    return {
        message: 'Tarif créé avec succès',
        tarifId: id,
    };
};

// View pour formater la réponse lors de la suppression d'un tarif
exports.formatDeletedTarif = () => {
    return {
        message: 'Tarif supprimé avec succès',
    };
};
    