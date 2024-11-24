// views/stationView.js

// Formater la liste des stations
exports.formatStationList = (stations) => {
    return stations.map((station) => ({
        id: station.idStation,
        name: station.Nom,
        townHallPhone: station.TelMairie,
        inhabitants: station.NbHabitants,
        summerTourists: station.NbTouristes_ete,
        winterSkiers: station.NbSkieur_hiver,
    }));
};

// Formater une station unique
exports.formatStation = (station) => {
    return {
        id: station.idStation,
        name: station.Nom,
        townHallPhone: station.TelMairie,
        inhabitants: station.NbHabitants,
        summerTourists: station.NbTouristes_ete,
        winterSkiers: station.NbSkieur_hiver,
    };
};

// Vue pour confirmer la création d'une station
exports.formatCreatedStation = (id) => {
    return {
        message: 'Station créée avec succès',
        stationId: id,
    };
};

// Vue pour confirmer la suppression d'une station
exports.formatDeletedStation = () => {
    return {
        message: 'Station supprimée avec succès',
    };
};
