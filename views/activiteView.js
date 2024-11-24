    // View pour formater les données des activités
    exports.formatActiviteList = (activites) => {
        return activites.map((activite) => ({
            id: activite.idActivite,
            name: activite.Libelle,
            price: activite.Tarif,
        }));
    };

    // View pour formater une réponse lors de la création d'une activité
    exports.formatCreatedActivite = (id) => {
        return {
            message: 'Activité créée avec succès',
            activiteId: id,
        };
    };

    // View pour formater une réponse lors de la suppression d'une activité
    exports.formatDeletedActivite = () => {
        return {
            message: 'Activité supprimée avec succès',
        };
    };
