// View pour formater les équipements d'une habitation
exports.formatEquipmentsByHabitation = (equipments) => {
    return equipments.map((equipment) => ({
        name: equipment.NomEquipement,
        description: equipment.Description,
        quantity: equipment.Quantite,
    }));
};

// View pour formater une réponse lors de l'ajout d'un équipement à une habitation
exports.formatAddedEquipment = (id) => {
    return {
        message: 'Équipement ajouté à l\'habitation avec succès',
        equiperId: id,
    };
};
