import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5"
    },
    secondary: {
      main: "#f44336"
    }
  }
});
theme.typography.h1 = {
  fontSize: '2rem',
  marginBottom: '1.5rem'
};
theme.typography.h2 = {
  fontSize: '1.5rem',
  marginBottom: '1.25rem'
};
theme.typography.h3 = {
  fontSize: '1.3rem',
  marginBottom: '8px'
};
theme.typography.body1 = {
  fontSize: '1.3rem',
  marginBottom: '8px'
};

/* istanbul ignore file */

const rootElement = document.getElementById('root');

ReactDOM.render(
  <>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <Router>
        <App /> 
      </Router>
    </MuiThemeProvider>
  </>,
rootElement);
