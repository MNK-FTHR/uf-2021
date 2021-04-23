import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Axios from 'axios';
import {GridList, Grid, Typography } from '@material-ui/core';
import Client from './Client/Client';
import AddForm from './Client/Forms/AddForm'
import useStyles from './styles';

const ClientsGestion = () => {
    const classes = useStyles();
    const [clients, setClients] = useState({ client: [] });
    useEffect(() => {
        const fetchClients = async () =>{
            const clientList = await Axios.get('http://localhost:5000/clients');
            setClients(clientList.data);
        }
        fetchClients();
    },[]);
    const deleteClient = async (id) => {await Axios.delete(`http://localhost:5000/clients/${id}`)}
    return (
        <div className={classes.root}>
            <h1>Client Admin</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                <Typography variant="h5">Nombre de clients: {clients.length}</Typography>
                    <GridList cellHeight={180} className={classes.gridList}>
                        {
                            Object.keys(clients).map((client, i)=>(
                                <Grid item xs={3} key={i}>
                                    <Client 
                                        
                                        id={clients[client].id}
                                        email={clients[client].email} 
                                        nom={clients[client].nom}
                                        prenom={clients[client].prenom}
                                        mot_de_passe={clients[client].mot_de_passe}
                                        date_naissance={clients[client].date_naissance}
                                        telephone={clients[client].telephone}
                                        adresse={clients[client].adresse}
                                        code_postal={clients[client].code_postal}
                                        ville={clients[client].ville}
                                        pays={clients[client].pays}
                                        inscrit={clients[client].inscrit}
                                        admin={clients[client].admin}
                                        onClick={() =>deleteClient(clients[client].id)}
                                    />
                                </Grid>
                            ))
                        }
                    </GridList>
                </Grid>
                <Grid item xs={6}>
                    <AddForm/>
                </Grid>
            </Grid>
            <Link to='/admin'>Back</Link>
        </div>
    )
}

export default ClientsGestion
