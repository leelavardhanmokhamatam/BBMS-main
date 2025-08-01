const express = require('express');
const router = express.Router();
const OurTeamsController = require('../Controllers/OurTeamsController');

const ourTeamsController = new OurTeamsController();

router.get('/get-team', ourTeamsController.getTeam);

module.exports = router;