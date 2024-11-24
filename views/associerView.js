// View pour formater les données des associations
exports.formatAssociationList = (associations) => {
    return associations.map((association) => ({
        reservationId: association.idReservation,
        reservationDate: association.DateReservation,
        arrivalDate: association.DateArrivee,
        departureDate: association.DateDepart,
        saisonId: association.idSaison,
        saisonName: association.NomSaison,
        saisonStartDate: association.DateDebut,
        saisonEndDate: association.DateFin,
    }));
};

// View pour formater une réponse lors de la création d'une association
exports.formatCreatedAssociation = (id) => {
    return {
        message: 'Association créée avec succès',
        associationId: id,
    };
};

// View pour formater une réponse lors de la suppression d'une association
exports.formatDeletedAssociation = () => {
    return {
        message: 'Association supprimée avec succès',
    };
};
