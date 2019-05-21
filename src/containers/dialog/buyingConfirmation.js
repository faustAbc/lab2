import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './buyingComponent.css';
import { Typography } from '@material-ui/core';
import { Dialog } from 'containers/dialog';
import Congrats from './congrats';
import Hidden from '@material-ui/core/Hidden';

function BuyingConfirmation({ handleClose, handleClickOpen, img, title, classes }) {
  console.log(img, title)
  return (
    <>
      <DialogTitle id="responsive-dialog-title">
        <Grid container justify="center">
          <Typography variant="h4" className={classes.title}>
            {`Do you want to buy ${title}?`}
          </Typography>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container justify="center" alignItems="center" className={classes.imgGrid}>
          <img src={img} alt="your bought" className={classes.img} />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container justify="space-between">
          <Button variant="outlined" onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Dialog img={img} title={title} body={props => <Congrats {...props} handleCloseParent={handleClose}/>}>
            <Button variant="contained" onClick={handleClickOpen} color="primary" autoFocus>
              Agree
          </Button>
          </Dialog>
        </Grid>
      </DialogActions>
    </>
  );
}

export default withStyles(styles)(BuyingConfirmation);