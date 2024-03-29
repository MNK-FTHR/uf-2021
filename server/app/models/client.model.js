const db = require('../config/db');
const hash = require('../config/hashing');

const Client = function(client){
this.email = client.email;
this.mot_de_passe = client.mot_de_passe;
this.nom = client.nom;
this.prenom = client.prenom;
this.date_naissance = client.date_naissance;
this.telephone = client.telephone;
this.prenom = client.prenom;
this.adresse = client.adresse;
this.code_postal = client.code_postal;
this.ville = client.ville;
this.pays = client.pays;
this.inscrit = client.inscrit;
this.admin = client.admin;
}
// créer le client
Client.create = (newClient, result) => {
    db.query("INSERT INTO clients SET ?", newClient, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created client: ", { id: res.insertId, ...newClient });
        result(null, { id: res.insertId, ...newClient });
    });
};

Client.findById = (clientId, result) => {
    db.query(`SELECT * FROM clients WHERE id = ${clientId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found client: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found client with the id
        result({ kind: "not_found" }, null);
    });
};

Client.getAll = result => {
    db.query("SELECT * FROM clients", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("\x1b[32m", "Les clients ont bien été fetch");
        result(null, res);
    });
};

Client.updateById = (id, client, result) => {
    hash.make(client.mot_de_passe)
    .then(hsh=>{
        db.query(
            "UPDATE clients SET email = ?, mot_de_passe = ?, prenom = ?, nom = ?, date_naissance = ?, telephone = ?, adresse = ?, code_postal = ?, ville = ?, pays = ? WHERE id = ?",
            [client.email, hsh, client.prenom, client.nom, client.date_naissance, client.telephone, client.adresse, client.code_postal, client.ville, client.pays, id],
            (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
    
            if (res.affectedRows == 0) {
                // not found client with the id
                result({ kind: "not_found" }, null);
                return;
            }
    
            console.log("updated client: ", { id: id, ...client });
            result(null, { id: id, ...client });
            }
        );
    })
};

Client.remove = (id, result) => {
    db.query("DELETE FROM clients WHERE id = ?", id, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
        }

        if (res.affectedRows == 0) {
        // not found Client with the id
        result({ kind: "not_found" }, null);
        return;
        }

        console.log("deleted client with id: ", id);
        result(null, res);
    });
};

module.exports = Client;