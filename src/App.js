import React from "react";
import { Route } from "react-router-dom";
import "./common/styles.css";
import Home from "./layouts/Home";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


/* istanbul ignore file */

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.google.co.uk/">
        ReactJS Test
      </Link>{' '}
        {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const appbarStyles = makeStyles((theme) => ({
  main: {
    marginBottom: "25vh"
  },

  menu: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end"
  },

  login: {
    textAlign: "right"
  },

  userName: {
    marginTop: "0"
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  }
}));

function App() {
  const classes = appbarStyles();
  return (
    <>
        <AppBar position="relative">
          <Container component="nav" maxWidth="lg">
            <Toolbar disableGutters={true}>
              <div className={classes.menu}></div>
            </Toolbar>
          </Container>
        </AppBar>
        <main className={classes.main}>
            <Route exact path="/" element={<Home />} />
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>ReactJS Test</Typography>
          <Copyright />
        </footer>
    </>
  );
}

export default App;
