import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './buyingComponent.css';
import { Typography } from '@material-ui/core';
import satisfied from 'images/satisfied.svg';

function Congrats({ handleClose, classes, handleCloseParent }) {
  return (
    <>
      <DialogTitle id="responsive-dialog-title">
        <Grid container justify="center">
          <Typography variant="h4" className={classes.title}>
            {`Congratulations!!!`}
          </Typography>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container justify="center" alignItems="center" className={classes.imgGrid}>
          <img src={satisfied} alt="satisfied" className={classes.img} />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container justify="center">
          <Button variant="contained" onClick={() => { handleClose(); handleCloseParent(); }} color="primary" autoFocus>
            OK!
          </Button>
        </Grid>
      </DialogActions>
    </>
  );
}

export default withStyles(styles)(Congrats);