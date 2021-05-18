const News = require('../models/new.model');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Les champs ne peuvent être vides!"
        })
    }
    const news = new News({
        title: req.body.title,
        content: req.body.content,
        date: req.body.date
    })
    News.create(news, (err, data)=>{
        if (err)
        res.status(500).send({
          message:
            err.message
        });
      else res.send(data);
    }).catch(err => console.error(err));
}
exports.findAll = (req, res) => {
    News.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message
          });
        else res.send(data);
      });
}

exports.findOne = (req, res) => {
    News.findById(req.params.newsId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Aucunes news avec l'ID ${req.params.newsId} trouvé...`
            });
          } else {
            res.status(500).send({
              message: "Erreur lors de la recherche de la news de l'id " + req.params.newsId
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
  
    News.updateById(
      req.params.newsId,
      new News(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Aucunes news avec l'ID ${req.params.newsId}.`
            });
          } else {
            res.status(500).send({
              message: "Erreur lors de la mise à jour de la news de l'id " + req.params.newsId
            });
          }
        } else res.send(data);
      }
    );
}

exports.delete = (req, res) => {
    News.remove(req.params.newsId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Aucunes news avec l'ID ${req.params.newsId}.`
            });
          } else {
            res.status(500).send({
              message: "Erreur lors de la suppression de la news de l'id " + req.params.newsId
            });
          }
        } else res.send({ message: `La news a bien été supprimé`, data: data });
      });
}