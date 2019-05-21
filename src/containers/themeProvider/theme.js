import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#CC5803' },
    secondary: { main: '#CED0CE' },
    type: 'dark'
  },
  typography: {
    fontWeightRegular: 200,
    fontWeightMedium: 400,
  }
});

export default theme;