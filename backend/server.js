// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const campaignRoutes = require('./routes/campaignRoutes');

// dotenv.config();
// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Connexion à MongoDB
// connectDB();

// // Routes
// app.use('/api/campaigns', campaignRoutes);
// app.use('/api/campaigns/uploads', express.static('uploads'));



// // Lancer le serveur
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const campaignRoutes = require('./routes/campaignRoutes');
const path = require('path');

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion DB
connectDB();

// Routes
app.use('/api/campaigns', campaignRoutes);

// ✅ Permet d'accéder aux fichiers uploadés
app.use('/api/campaigns/uploads', express.static(path.join(__dirname, '/uploads')));

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
