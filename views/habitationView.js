// views/habitationView.js

// Vue pour formater les données des habitations
exports.formatHabitationList = (habitations) => {
    return habitations.map((habitation) => ({
        id: habitation.idHabitation,
        numApp: habitation.NumApp,
        adresse: habitation.Adresse,
        immeuble: habitation.Immeuble,
        capacite: habitation.Capacite,
        surface: habitation.Surface,
        complement: habitation.Complement,
        orientation: habitation.Orientation,
        balcon: habitation.Balcon === 1 ? true : false, // Convertir en booléen
    }));
};

// Vue pour formater une réponse lors de la création d'une habitation
exports.formatCreatedHabitation = (id) => {
    return {
        message: 'Habitation créée avec succès',
        habitationId: id,
    };
};

// Vue pour formater une réponse lors de la suppression d'une habitation
exports.formatDeletedHabitation = () => {
    return {
        message: 'Habitation supprimée avec succès',
    };
};
