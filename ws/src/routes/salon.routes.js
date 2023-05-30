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

router.get('/servicos/:salaoId', async (req, res) => {
    try{
        // const salaoId = req.params.salaoId;
        const { salaoId } = req.params;
        const services = await Service.find({
            salaoId,
            status: 'Active'
        }).select('_id title');

        res.json({
            services: services.map(s => ({ label: s.title, value: s._id }))
        });

    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;