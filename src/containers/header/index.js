import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Header = ({ classes, uploadButton: UploadButton }) => (
  <div className={classes.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h6" color="primary">
            Photo info
          </Typography>
          <UploadButton />
        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);


export default withStyles(null)(Header);