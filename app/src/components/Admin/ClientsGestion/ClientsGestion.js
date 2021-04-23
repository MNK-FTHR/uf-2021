import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Axios from 'axios';
import {GridList, Typography } from '@material-ui/core';
import useStyles from './styles'

const ClientsGestion = () => {
    const classes = useStyles();
    const [clients, setClients] = useState({ client: [] });
    useEffect(() => {
        const fetchClients = async () =>{
            const clientList = await Axios.get('http://localhost:5000/clients');
            setClients(clientList.data);
        }
        fetchClients();
      }, []);

    return (
        <div>
            <h1>Client Admin</h1>
            <GridList cellHeight={180} className={classes.gridList}>
                <Typography variant="h4" gutterBottom>
                    Liste des Clients
                </Typography>
                <div>
                    <hr/>
                {
                    Object.keys(clients).map((client, i)=>(
                        <Typography key={i} variant="subtitle1" gutterBottom>
                            Client {client}: <br/>
                            email: {clients[client].email} <br/>
                            nom: {clients[client].nom} <br/>
                            prénom: {clients[client].prenom}<br/>
                            <hr/>
                        </Typography>
                    ))
                }
                </div>
            </GridList>
            <Link to='/admin'>Back</Link>
        </div>
    )
}

export default ClientsGestion
