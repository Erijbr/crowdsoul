const express = require('express');
const Campaign = require('../models/Campaign');
const router = express.Router();

// ➡️ Créer une nouvelle campagne
router.post('/', async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).json(campaign);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ➡️ Récupérer toutes les campagnes
router.get('/', async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
