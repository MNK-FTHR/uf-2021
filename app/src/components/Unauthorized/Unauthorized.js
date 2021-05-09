import React from 'react';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import useStyles from './styles';

const Unauthorized = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Alert variant="filled" severity="warning">
            You must be Loged In to access this part of the site !
        </Alert>
        <p><Link to='/'>Back to Home</Link></p>
        </div>
    )
}

export default Unauthorized;