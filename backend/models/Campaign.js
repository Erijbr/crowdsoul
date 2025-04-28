const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: String, required: true },
  mainImage: { type: String, required: true },
  createdBy: { type: String, required: true },
  createdByImage: { type: String, required: true },
  daysLeft: { type: Number, required: true },
  amountRaised: { type: String, required: true },
  goal: { type: String, required: true },
  contributors: { type: Number, required: true },
  category: { type: String, required: true },
  country: { type: String, required: true },
  type: { type: String, required: true }
});

module.exports = mongoose.model('Campaign', CampaignSchema);
