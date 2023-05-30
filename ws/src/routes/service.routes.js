const express = require('express');
const router = express.Router();
const Salon = require('../models/salon')
const Service = require('../models/service')

router.post('/', async (req, res) => {
    try {
        const salon = await new Salon(req.body).save();
        res.json({ salon });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});



module.exports = router;