import React from 'react';
import { Link } from 'react-router-dom';

//material ui
import {Alert} from '@material-ui/lab';
import {Avatar, Button, CssBaseline, TextField, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//material ui

import useStyles from './styles';

const Login = (props) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      {
        props.loginAlert &&
        <Alert variant="filled" severity="error">
        Wrong password or email !
      </Alert>
      }
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          onChange={props.emailChange}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={props.passwordChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={props.handleLogin}
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
          <Link to='/register'>Pas encore de compte ?</Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
  )
};

export default Login;