import React, { useState, useEffect } from 'react';
import Axios from "axios";
import {Avatar, Button, CssBaseline, TextField, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';
import useStyles from './styles';

function Register() {
    const classes = useStyles();
    const [clientData, setClientData] = useState({ email: '', mot_de_passe: '', prenom: '', nom: '', date_naissance: '', telephone: '', adresse: '', code_postal: '', ville: '', pays: ''});
    const register = async(e) => {
      e.preventDefault();
      const response = await Axios.post("http://localhost:5000/clients", clientData);
      console.log(response)
    };
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
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
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={register}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item xs>
                    <p><Link to='/login'>Already have account ?</Link></p>
                </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
}

export default Register
