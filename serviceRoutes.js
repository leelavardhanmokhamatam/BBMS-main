const express = require('express');
const router = express.Router();
const ServiceController = require('../Controllers/ServiceController');

const serviceController = new ServiceController();

router.get('/services', serviceController.getData);

module.exports = router;
