import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const SDKSwitchStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1)
  },
  installed: {
    borderTopRightRadius: 0,  
    borderBottomRightRadius: 0
  },
  uninstalled: {
    borderTopLeftRadius: 0,  
    borderBottomLeftRadius: 0
  },
  SDKSwitchOuter: {
    marginBottom: theme.spacing(4 )
  }
}));

const SDKSwitch = ({
  setShowInstalledSDK,
  setShowUninstalledSDK
}) => {
  const classes = SDKSwitchStyles();
  const [installedVisible, setInstalledVisible] = React.useState(false);
  const [UninstalledVisible, setUninstalledVisible] = React.useState(false);

  const disableInstalledButton = async () => {
    setInstalledVisible(true)
    setShowInstalledSDK(true)
    setUninstalledVisible(false)
    setShowUninstalledSDK(false)
  }

  const disableUninstalledButton = async () => {
    setUninstalledVisible(true)
    setShowUninstalledSDK(true)
    setInstalledVisible(false)
    setShowInstalledSDK(false)
  }

  return (
    <Container maxWidth="md" className={classes.SDKSwitchOuter}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <>
            <Button
              className={classes.installed} 
              size="large"
              variant="contained"
              color="primary"
              data-testid="installedSDKButton"
              disabled={installedVisible === true}
              onClick={disableInstalledButton}
            >Installed</Button>
            <Button
              className={classes.uninstalled} 
              size="large"
              variant="contained"
              color="secondary"
              data-testid="installedSDKButton"
              disabled={UninstalledVisible === true}
              onClick={disableUninstalledButton}
            >Uninstalled</Button>
          </>
        </Grid>
      </Grid>
    </Container>
  );
};
  
export default SDKSwitch;
  