import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import SDKSwitch from '../components/SDKSwitch';
import InstalledSDK from '../components/InstalledSDK';
import UninstalledSDK from '../components/UninstalledSDK';

const homeStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1),
  },
  homeOuter: {
    marginTop: theme.spacing(8),
  }
}));

const Home = () => {
  const classes = homeStyles();

  return (
    <>
      <Container maxWidth="md">
        <div className={classes.homeOuter}>
          <Typography data-testid={"mainHeading"} className={classes.title} align="left" variant="h1" color="inherit" noWrap>
            React Test
          </Typography>
        </div>
      </Container>
      <SDKSwitch />
      <InstalledSDK />
      <UninstalledSDK />
    </>
  );
};

export default Home;
