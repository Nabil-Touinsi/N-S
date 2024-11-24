// views/reservationView.js

// Vue pour formater la liste des réservations
exports.formatReservationList = (reservations) => {
    return reservations.map((reservation) => ({
        id: reservation.idReservation,
        reservationDate: reservation.DateReservation,
        status: reservation.Statut,
        arrivalDate: reservation.DateArrivee,
        departureDate: reservation.DateDepart,
        depositAmount: reservation.MontantAcompte,
        balanceAmount: reservation.MontantSolde,
        caution: reservation.Caution,
        locataireId: reservation.idLocataire,
        habitationId: reservation.idHabitation,
    }));
};

// Vue pour formater une réservation unique
exports.formatReservation = (reservation) => {
    return {
        id: reservation.idReservation,
        reservationDate: reservation.DateReservation,
        status: reservation.Statut,
        arrivalDate: reservation.DateArrivee,
        departureDate: reservation.DateDepart,
        depositAmount: reservation.MontantAcompte,
        balanceAmount: reservation.MontantSolde,
        caution: reservation.Caution,
        locataireId: reservation.idLocataire,
        habitationId: reservation.idHabitation,
    };
};

// Vue pour confirmer la création d'une réservation
exports.formatCreatedReservation = (id) => {
    return {
        message: 'Réservation créée avec succès',
        reservationId: id,
    };
};

// Vue pour confirmer la suppression d'une réservation
exports.formatDeletedReservation = () => {
    return {
        message: 'Réservation supprimée avec succès',
    };
};
