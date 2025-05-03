// // data/campaign.ts
// import axios from 'axios';
// import { ICampaign } from '../types';

// const API_URL = 'http://localhost:5000/api/campaigns';  // Remplacez par l'URL de votre API

// // Variable pour stocker les campagnes localement dans ce fichier
// let campaignsData: ICampaign[] = [];

// // Récupérer les campagnes depuis l'API et mettre à jour campaignData
// export const fetchCampaigns = async (): Promise<ICampaign[]> => {
//     try {
//         const response = await axios.get(API_URL);
//         campaignsData = response.data;  // Mettez à jour la variable avec les données récupérées
//         return campaignsData;  // Retourner les données pour utilisation dans le composant
//     } catch (error) {
//         console.error("Erreur lors de la récupération des campagnes", error);
//         return [];  // Retourner un tableau vide en cas d'erreur
//     }
// };

// // Ajouter une nouvelle campagne et mettre à jour campaignData
// export const addCampaign = async (newCampaign: any): Promise<ICampaign | null> => {
//     try {
//         const response = await axios.post(API_URL, newCampaign);
//         const addedCampaign = response.data;  // La campagne ajoutée avec un ID généré
//         CampaignsData.campaigns.push(addedCampaign);  // Ajoutez la campagne à la variable locale
//         return addedCampaign;  // Retourner la campagne ajoutée
//     } catch (error) {
//         console.error("Erreur lors de l'ajout de la campagne", error);
//         return null;  // Retourner null en cas d'erreur
//     }
// };

// // Fonction pour récupérer campaignData
// export default campaignsData;

// import axios from 'axios';
// import { ICampaign } from '../types';

// const API_URL = 'http://localhost:5000/api/campaigns';

// // --- Au lieu de faire export default [], on exporte un objet avec campaignsData ---
// const CampaignsData = {
//     campaigns: [] as ICampaign[],

//     async fetchCampaigns() {
//         try {
//             const response = await axios.get(API_URL);
//             this.campaigns = response.data;
//         } catch (error) {
//             console.error("Erreur lors de la récupération des campagnes", error);
//         }
//     },

//     async addCampaign(newCampaign: ICampaign) {
//         try {
//             const response = await axios.post(API_URL, newCampaign);
//             const addedCampaign = response.data;
//             this.campaigns.push(addedCampaign);
//         } catch (error) {
//             console.error("Erreur lors de l'ajout de la campagne", error);
//         }
//     },

//     getCampaigns() {
//         return this.campaigns;
//     }
// };

// export default CampaignsData;

import axios from 'axios';
import { ICampaign } from '../types';

const API_URL = 'http://localhost:5000/api/campaigns';

const CampaignsData = {
    campaigns: [] as ICampaign[],

    // Fonction pour charger les campagnes depuis le localStorage ou l'API
    async fetchCampaigns() {
        try {
            const response = await axios.get(API_URL);
            this.campaigns = response.data;
            localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
        } catch (error) {
            console.error("Erreur lors de la récupération des campagnes", error);
        }
    },
    

    // Ajouter une nouvelle campagne
    async addCampaign(newCampaign: ICampaign) {
        try {
            const response = await axios.post(API_URL, newCampaign);
            const addedCampaign = response.data;
            this.campaigns.push(addedCampaign);
            // Mettre à jour le localStorage avec la nouvelle campagne
            localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
        } catch (error) {
            console.error("Erreur lors de l'ajout de la campagne", error);
        }
    },

    // Récupérer les campagnes (depuis l'état ou le localStorage)
    getCampaigns() {
        this.fetchCampaigns();
        console.log(this.campaigns)
        return this.campaigns;
    }
};

export default CampaignsData;

