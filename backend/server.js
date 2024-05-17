const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000; // Port du serveur

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Connecter à la base de données MongoDB avec Mongoose
mongoose.connect('URL_de_connexion_MongoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connexion à MongoDB réussie !");
}).catch((err) => {
    console.error("Erreur de connexion à MongoDB :", err);
});

// Définir les routes ici...

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});

const mongoose = require('mongoose');

// Définir le schéma pour un modèle (par exemple, un modèle de "Utilisateur")
const userSchema = new mongoose.Schema({
    nom: String,
    email: String,
    // Ajoutez d'autres champs selon vos besoins
});

// Créer un modèle à partir du schéma
const User = mongoose.model('User', userSchema);

module.exports = User; // Exporter le modèle pour une utilisation dans d'autres fichiers

const express = require('express');
const router = express.Router();
const User = require('./models/user');

// Route pour créer un nouvel utilisateur
router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Autres routes CRUD...

module.exports = router;

const userRoutes = require('./routes/user');
app.use(userRoutes); // Utilisez les routes dans votre application Express