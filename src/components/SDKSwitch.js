import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const SDKSwitchStyles = makeStyles((theme) => ({
    title: {
      marginBottom: theme.spacing(1)
    }
  }));

  const SDKSwitch = () => {
    const classes = SDKSwitchStyles();
  
    return (
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <>
              <Typography className={classes.title} align="left" variant="h2" color="inherit" noWrap>SDK Switch</Typography>
            </>
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  export default SDKSwitch;
  