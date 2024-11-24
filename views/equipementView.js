// View pour formater la liste des équipements
exports.formatEquipementList = (equipements) => {
    return equipements.map((equipement) => ({
        id: equipement.idEquipement,
        name: equipement.NomEquipement,
        description: equipement.Description,
        quantity: equipement.Quantite,
    }));
};

// View pour formater une réponse lors de la création d'un équipement
exports.formatCreatedEquipement = (id) => {
    return {
        message: 'Équipement créé avec succès',
        equipementId: id,
    };
};

// View pour formater une réponse lors de la suppression d'un équipement
exports.formatDeletedEquipement = () => {
    return {
        message: 'Équipement supprimé avec succès',
    };
};
