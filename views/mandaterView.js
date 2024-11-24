// views/mandaterView.js

// Vue pour formater la liste des relations mandater
exports.formatMandaterList = (mandaterList) => {
  return mandaterList.map((mandater) => ({
      id: mandater.idMandater,
      idProprietaire: mandater.idProprietaire,
      idLocataire: mandater.idLocataire,
  }));
};

// Vue pour confirmer la création d'une relation mandater
exports.formatCreatedMandater = (id) => {
  return {
      message: 'Relation Mandater créée avec succès',
      idMandater: id,
  };
};
