const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Formulaire = require('../models/formulaire');

exports.propertyDetails = (req, res, next) => {
    bcrypt.hash(req.body.nom,)
        .then(hash => {
            const formulaire = new Formulaire({
                email: req.body.email,
                message: req.body.message,
                téléphone: req.body.téléphone,
                téléphone: hash
            });
            formulaire.save()
                .then(() => res.status(201).json({ message: 'utilisateur trouvé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};
