// views/typeLocationView.js

exports.formatTypeLocationList = (typeLocations) => {
    return typeLocations.map((type) => ({
        id: type.idType,
        code: type.CodeType,
        description: type.Description,
        averageSurface: type.SurfaceMoy,
    }));
};

exports.formatTypeLocation = (type) => {
    return {
        id: type.idType,
        code: type.CodeType,
        description: type.Description,
        averageSurface: type.SurfaceMoy,
    };
};

exports.formatCreatedTypeLocation = (id) => {
    return {
        message: 'Type de location créé avec succès',
        typeId: id,
    };
};

exports.formatDeletedTypeLocation = () => {
    return {
        message: 'Type de location supprimé avec succès',
    };
};
