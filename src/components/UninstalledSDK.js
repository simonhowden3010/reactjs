import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const uninstalledSDKStyles = makeStyles((theme) => ({
    title: {
      marginBottom: theme.spacing(1)
    },
    cardOuter: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    }
  }));

  const UninstalledSDK = () => {
    const classes = uninstalledSDKStyles();
  
    return (
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card className={classes.cardOuter}>
              <CardContent>
                <Typography className={classes.title} align="left" variant="h2" color="inherit" noWrap>
                  Uninstalled SDKs  
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  export default UninstalledSDK;
  