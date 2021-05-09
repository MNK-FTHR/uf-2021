import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//material ui
import {AppBar, Toolbar, Button, IconButton, List, ListItem, ListItemText, Container, CssBaseline, useScrollTrigger, Fab, Zoom } from "@material-ui/core";
import useStyles from './styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Home } from "@material-ui/icons";
//material ui

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const navLinks = [
    { title: `about`, path: `/about` },
    { title: `news`, path: `/news` },
    { title: `scoreboard`, path: `/scoreboard` },
    
  ];
const login ={ title: `login`, path: `/login` }
const protectedLinks = [
  { title: `jeux`, path: `/jeux` },
  { title: `profile`, path: `/profile` },
  { title: `inscription`, path: `/inscription` },
]
const adminLinks = [
  { title: `dashboard`, path: `/dashboard` },
]
export default function BackToTop(props) {
    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
            <Container maxWidth="md" className={classes.navbarDisplayFlex}>
            <IconButton edge="start" color="inherit" aria-label="home">
                <Link to='/'>
                    <Home fontSize="large" />
                </Link>
            </IconButton>
            <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navDisplayFlex}
            >
                {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                    <ListItem button>
                    <ListItemText primary={title} />
                    </ListItem>
                </Link>
                ))}
                {
                  props.loginStatus &&
                  protectedLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                    <ListItem button>
                    <ListItemText primary={title} />
                    </ListItem>
                </Link>
                ))}
                {
                  !props.loginStatus &&
                <Link to={login.path} className={classes.linkText}>
                    <ListItem button>
                    <ListItemText primary={login.title} />
                    </ListItem>
                </Link>
                }
                {
                  props.admin &&
                  adminLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                    <ListItem button>
                    <ListItemText primary={title} />
                    </ListItem>
                </Link>
                ))}
                {
                    props.loginStatus &&
                    <Button           
                      variant="contained"
                      color="secondary"
                      onClick={props.handleLogout}>Log Out</Button>
                }
            </List>
            </Container>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}