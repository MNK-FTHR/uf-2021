import React, { useState, useEffect } from 'react'
import {TextField, Button} from '@material-ui/core';
import useStyles from './styles';
import Axios from 'axios';

const AddForm = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState({ email: '', mot_de_passe: '', prenom: '', nom: '', date_naissance: '', telephone: '', adresse: '', code_postal: '', ville: '', pays: ''});
    const clear = () => {
        setPostData({ email: '', mot_de_passe: '', prenom: '', nom: '', date_naissance: '', telephone: '', adresse: '', code_postal: '', ville: '', pays: ''});
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await Axios.post('http://localhost:5000/clients', postData);
        clear()
    };
    return (
        <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="email" type="email" label="Email" onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
            <TextField id="password" type="password" label="Mot de passe" onChange={(e) => setPostData({ ...postData, mot_de_passe: e.target.value })} />
            <TextField id="prenom" label="Prénom" onChange={(e) => setPostData({ ...postData, prenom: e.target.value })} />
            <TextField id="nom" label="Nom" onChange={(e) => setPostData({ ...postData, nom: e.target.value })} />
            <TextField id="date" type="date" 
                className={classes.dateField}
                InputLabelProps={{
                    shrink: true,
                }}
                label="Date de naissance" onChange={(e) => setPostData({ ...postData, date_naissance: e.target.value })} />
            <TextField id="phone" label="Téléphone" onChange={(e) => setPostData({ ...postData, telephone: e.target.value })} />
            <TextField id="adresse" label="Adresse" onChange={(e) => setPostData({ ...postData, adresse: e.target.value })} />
            <TextField id="codepostal" label="Code Postal" onChange={(e) => setPostData({ ...postData, code_postal: e.target.value })} />
            <TextField id="ville" label="Ville" onChange={(e) => setPostData({ ...postData, ville: e.target.value })} />
            <TextField id="pays" label="Pays" onChange={(e) => setPostData({ ...postData, pays: e.target.value })} />
            <Button variant="contained" color="primary" size="large" type="submit" fullWidth>
                Créer le Client
            </Button>
        </form>
    )
}

export default AddForm
