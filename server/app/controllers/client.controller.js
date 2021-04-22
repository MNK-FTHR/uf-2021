const Client = require('../models/client.model');
const hash = require('../config/hashing');
exports.create = (req, res) => {
 if (!req.body) {
     res.status(400).send({
         message: "Les champs ne peuvent être vides!"
     })
 }
 hash.make('password123')
  .then(hsh => {
    const client = new Client({
      email: req.body.email,
      mot_de_passe: hsh,
      prenom: req.body.prenom,
      nom: req.body.nom,
      date_naissance: req.body.date_naissance,
      telephone: req.body.telephone,
      adresse: req.body.adresse,
      code_postal: req.body.code_postal,
      ville: req.body.ville,
      pays: req.body.pays,
      inscrit: req.body.inscrit,
      admin: req.body.admin 
   })
   Client.create(client, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message
        });
      else res.send(data);
    });
  }
    )
  .catch(err => console.error(err));
}

exports.findAll = (req, res) => {
    Client.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message
          });
        else res.send(data);
      });
}
exports.findOne = (req, res) => {
    Client.findById(req.params.clientId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Aucuns client avec l'ID ${req.params.customerId} trouvé...`
            });
          } else {
            res.status(500).send({
              message: "Erreur lors de la recherche du client de l'id " + req.params.customerId
            });
          }
        } else res.send(data);
      });
}
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Les champs ne peuvent être vides!"
    });
  }

  Client.updateById(
    req.params.clientId,
    new Client(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Aucuns client avec l'ID ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Erreur lors de la mise à jour du client de l'id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
}
exports.delete = (req, res) => {
    Client.remove(req.params.clientId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Aucuns client avec l'ID ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Erreur lors de la suppression du client de l'id " + req.params.customerId
            });
          }
        } else res.send({ message: `Le client a bien été supprimé`, data: data });
      });
}