import React, { useState, useEffect } from 'react';
import Axios from "axios";
import {Button, TextField, Grid} from '@material-ui/core';
import useStyles from './styles';

function UpdateForm(props) {
    const classes = useStyles();
    Axios.defaults.withCredentials = true;
    const [clientData, setClientData] = useState({ email: '', prenom: '', nom: '', mot_de_passe:'', date_naissance: '', telephone: '', adresse: '', code_postal: '', ville: '', pays: ''});
    const update = async(e) => {
        e.preventDefault();
        console.log(clientData)
        const response = await Axios.put(`http://localhost:5000/clients/${props.client.id}`, clientData);
        console.log(response)
      };
    return (
        <div>
            update {props.client.prenom}
            <form className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
                    defaultValue={props.client.email}
                    />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="prenom"
                  name="prenom"
                  variant="outlined"
                  required
                  fullWidth
                  id="prenom"
                  label="Prénom"
                  autoFocus
                  onChange={(e) => setClientData({ ...clientData, prenom: e.target.value })}
                  defaultValue={props.client.prenom}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nom"
                  label="Nom"
                  name="nom"
                  autoComplete="nom"
                  onChange={(e) => setClientData({ ...clientData, nom: e.target.value })}
                  defaultValue={props.client.nom}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="mot_de_passe"
                  label="Mot De Passe"
                  type="password"
                  id="mot_de_passe"
                  autoComplete="mot_de_passe"
                  onChange={(e) => setClientData({ ...clientData, mot_de_passe: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="date_naissance"
                  name="date_naissance"
                  variant="outlined"
                  type="date"
                  required
                  fullWidth
                  id="date_naissance"
                  label="Date de naissance"
                  autoFocus
                  onChange={(e) => setClientData({ ...clientData, date_naissance: e.target.value })}
                  defaultValue={props.client.date_naissance}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="telephone"
                  label="Téléphone"
                  name="telephone"
                  autoComplete="telephone"
                  onChange={(e) => setClientData({ ...clientData, telephone: e.target.value })}
                  defaultValue={props.client.telephone}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="adresse"
                  label="Adresse"
                  name="adresse"
                  autoComplete="adresse"
                  onChange={(e) => setClientData({ ...clientData, adresse: e.target.value })}
                  defaultValue={props.client.adresse}

                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="code_postal"
                  name="code_postal"
                  variant="outlined"
                  required
                  fullWidth
                  id="code_postal"
                  label="Code Postal"
                  onChange={(e) => setClientData({ ...clientData, code_postal: e.target.value })}
                  defaultValue={props.client.code_postal}

                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="ville"
                  label="Ville"
                  name="ville"
                  autoComplete="ville"
                  onChange={(e) => setClientData({ ...clientData, ville: e.target.value })}
                  defaultValue={props.client.ville}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="pays"
                  label="Pays"
                  name="pays"
                  autoComplete="pays"
                  onChange={(e) => setClientData({ ...clientData, pays: e.target.value })}
                  defaultValue={props.client.pays}

                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={update}
                    >
                    Update
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    onClick={props.cancel}
                    >
                    Cancel
                    </Button>
                </Grid>
            </Grid>
            </form>
        </div>
    )
}

export default UpdateForm
