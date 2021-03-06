import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from 'containers/themeProvider';
import { Grid } from '@material-ui/core';
import style from './index.css';
import { withStyles } from '@material-ui/core/styles';
import Header from '../header';

const Layout = ({ children, classes }) => (
  <ThemeProvider>
    <Header />
    <Grid className={classes.root}>
      <CssBaseline />
      {children}
    </Grid>
  </ThemeProvider>
);


export default withStyles(style)(Layout);