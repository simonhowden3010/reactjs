import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const homeStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1),
  },
  homeOuter: {
    marginTop: theme.spacing(8),
  },
  menu: {
    flexGrow: 1
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
    </>
  );
};

export default Home;
