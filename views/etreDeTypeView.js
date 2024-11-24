// Vue pour formater les types d'une habitation
exports.formatTypesByHabitation = (types) => {
    return types.map((type) => ({
        typeId: type.idType,
        typeCode: type.CodeType,
        description: type.Description,
    }));
};

// Vue pour formater une réponse lors de l'ajout d'un type à une habitation
exports.formatAddedType = (id) => {
    return {
        message: "Type ajouté à l'habitation avec succès",
        typeRelationId: id,
    };
};

// Vue pour formater une réponse lors de la suppression d'un type
exports.formatDeletedType = () => {
    return {
        message: "Type supprimé de l'habitation avec succès",
    };
};
