// // const express = require('express');
// // const Campaign = require('../models/Campaign');
// // const router = express.Router();
// // const multer = require('multer');
// // const upload = multer({ dest: 'uploads/' });

// // // ➡️ Créer une nouvelle campagne
// // router.post('/', async (req, res) => {
// //   try {
// //     const campaign = new Campaign(req.body);
// //     await campaign.save();
// //     res.status(201).json(campaign);
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // });


// // // ➡️ Récupérer toutes les campagnes
// // router.get('/', async (req, res) => {
// //   try {
// //     const campaigns = await Campaign.find();
// //     res.status(200).json(campaigns);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // });


// // router.post('/upload', upload.any('images' ), (req, res) => {
// //     console.log(req.files);  // Chaque fichier a un champ `.originalname` et `.filename`
// //     res.json({
// //       success: true,
// //       files: req.files.map(file => ({
// //         originalName: file.originalname,
// //         url: `/api/campaigns/uploads/${file.filename}`,
// //       }))
// //     });
    
// // });


// // module.exports = router;



// // routes/campaignRoutes.js
// const express = require('express');
// const Campaign = require('../models/Campaign');
// const router = express.Router();
// const multer = require('multer');
// const path = require('path');

// // Configuration Multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // dossier où enregistrer
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = Date.now() + '-' + file.originalname;
//     cb(null, uniqueName);
//   }
// });

// const upload = multer({ storage });

// // ➡️ Créer une campagne
// router.post('/', async (req, res) => {
//   try {
//     const campaign = new Campaign(req.body);
//     await campaign.save();
//     res.status(201).json(campaign);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // ➡️ Récupérer toutes les campagnes
// router.get('/', async (req, res) => {
//   try {
//     const campaigns = await Campaign.find();
//     res.status(200).json(campaigns);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // ✅ Upload multiple images (champ = 'images')
// router.post('/upload', upload.array('images', 10), (req, res) => {
//   console.log(req.files);
//   res.json({
//     success: true,
//     files: req.files.map(file => ({
//       originalName: file.originalname,
//       url: `/api/campaigns/uploads/${file.filename}`,
//     }))
//   });
// });

// module.exports = router;
const express = require('express');
const Campaign = require('../models/Campaign');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the uploads directory exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Configuration Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // folder where files will be stored
  },
  filename: (req, file, cb) => {
    const uniqueName = file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// ➡️ Create a campaign
router.post('/', async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).json(campaign);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ➡️ Get all campaigns
router.get('/', async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ Upload multiple images (field = 'images')
router.post('/upload', upload.array('images', 10), (req, res) => {
  if (!req.files) {
    return res.status(400).json({ error: 'No files uploaded' });
  }
  
  res.json({
    success: true,
    files: req.files.map(file => ({
      originalName: file.originalname,
      url: `/api/campaigns/uploads/${file.filename}`,
    }))
  });
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message });
});

module.exports = router;
