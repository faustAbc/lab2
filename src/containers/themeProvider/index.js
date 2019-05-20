import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;