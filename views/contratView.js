// View pour formater les données des contrats
exports.formatContractList = (contracts) => {
    return contracts.map((contract) => ({
        id: contract.idContrat,
        dateSignature: contract.DateSignature,
        duree: contract.Duree,
        montantTotal: contract.MontantTotal,
        dateFin: contract.DateFin,
    }));
};

// View pour formater une réponse lors de la création d'un contrat
exports.formatCreatedContract = (id) => {
    return {
        message: 'Contrat créé avec succès',
        contractId: id,
    };
};

// View pour formater une réponse lors de la suppression d'un contrat
exports.formatDeletedContract = () => {
    return {
        message: 'Contrat supprimé avec succès',
    };
};
