import React from 'react'

import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import useStyles from './styles'

const CLient = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.id}
                </Typography>
                <Typography variant="subtitle2">
                    {props.email}
                </Typography>
                <Typography variant="subtitle2" >
                    {props.nom} {props.prenom} 
                </Typography>
                <Typography variant="subtitle2" >
                    {props.date_naissance} {props.telephone}
                </Typography>
                <Typography variant="subtitle2" >
                    {props.adresse} {props.code_postal}
                </Typography>
                <Typography variant="subtitle2" >
                    {props.ville} {props.pays}
                </Typography>
                <Typography variant="subtitle2" >
                    {props.inscrit === 1?"Inscrit":"Pas inscrit"} {props.admin === 1? "Admin":"Client"}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={props.onClick}>Delete</Button>
            </CardActions>
        </Card>
    )
}

export default CLient
