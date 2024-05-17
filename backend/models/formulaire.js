const mongoose = require('mongoose')

const formulaireSchema = mongoose.Schema({
    nom:{type: String, required: true},
    email:{type: String, required: true},
    téléphone:{type: " ", required: true},
    message:{type: String, required: true},
});

const Formulaire = mongoose.model('Formulaire', formulaireSchema );

module.exports = Formulaire