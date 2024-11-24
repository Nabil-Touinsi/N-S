// View pour formater une liste de services
exports.formatServiceList = (services) => {
    return services.map((service) => ({
        id: service.id,
        title: service.titre,
        description: service.description,
        icon: service.icone,
        order: service.ordre,
    }));
};

// View pour formater un service unique
exports.formatSingleService = (service) => {
    return {
        id: service.id,
        title: service.titre,
        description: service.description,
        icon: service.icone,
        order: service.ordre,
    };
};

// View pour formater une réponse lors de la création d'un service
exports.formatCreatedService = (id) => {
    return {
        message: 'Service créé avec succès',
        serviceId: id,
    };
};

// View pour formater une réponse lors de la suppression d'un service
exports.formatDeletedService = () => {
    return {
        message: 'Service supprimé avec succès',
    };
};
