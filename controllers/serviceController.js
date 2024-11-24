const Service = require('../models/service');
const serviceView = require('../views/serviceView');        

exports.getAllServices = (req, res) => {
    Service.getAll((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(serviceView.formatServiceList(results));
        }
    });
};

exports.getServiceById = (req, res) => {
    const id = req.params.id;
    Service.getById(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!result.length) {
            res.status(404).json({ message: 'Service not found' });
        } else {
            res.status(200).json(serviceView.formatSingleService(result[0]));
        }
    });
};

exports.createService = (req, res) => {
    const newService = req.body;
    Service.create(newService, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json(serviceView.formatCreatedService(result.insertId));
        }
    });
};

exports.updateService = (req, res) => {
    const id = req.params.id;
    const updatedService = req.body;
    Service.update(id, updatedService, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Service not found' });
        } else {
            res.status(200).json({ message: 'Service mis à jour avec succès' });
        }
    });
};

exports.deleteService = (req, res) => {
    const id = req.params.id;
    Service.delete(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Service not found' });
        } else {
            res.status(200).json(serviceView.formatDeletedService());
        }
    });
};

