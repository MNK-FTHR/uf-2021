import React, { Component } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import {Button, CssBaseline, AppBar, Toolbar, Typography, Container, Grid} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
const styles = theme => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });
 class Jeux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: styles,
            client: props.client,
            challenges: props.challenges,
            open: false,
            files: []
        };
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files,
            open: false
        });
    }

    handleOpen() {
        this.setState({
            open: true,
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                    <Typography variant="h6" color="inherit" center noWrap>
                    Session de jeux de {this.state.client.prenom}
                    </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        @HOME A GAME
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Challenge {this.state.challenges[0].id} : 
                            {this.state.challenges[0].content}
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Ce challenge vous raportera {this.state.challenges[0].points} points
                        </Typography>
                        <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                            <Button variant="contained" color="primary" onClick={this.handleOpen.bind(this)}>
                                Ajouter un fichier
                            </Button>
                            <DropzoneDialog
                                open={this.state.open}
                                onSave={this.handleSave.bind(this)}
                                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                showPreviews={true}
                                maxFileSize={5000000}
                                onClose={this.handleClose.bind(this)}
                            />
                            </Grid>
                        </Grid>
                        </div>
                    </Container>
                    </div>
                    </main>
            </div>
        );
    }
}

export default withStyles(styles)(Jeux);