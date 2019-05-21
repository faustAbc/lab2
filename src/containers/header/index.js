import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Drawer from 'containers/drawer';
import { routing } from 'utils/config';
import styles from './index.css';

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Grid container justify="center" alignItems="center">
          <div className={classes.menuButton}>
            <Drawer config={routing} />
          </div>
          <Typography variant="h6" color="primary">
            Your cool app
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Header);