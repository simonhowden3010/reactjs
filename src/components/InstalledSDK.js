import React, { useEffect } from "react";
import { getInstalledSDKData } from "../services/http.js";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const installedSDKStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1),
    width: "50%"
  },
  cardOuter: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  dataItem: {},
  catName: {
    textDecoration: "underline"
  }
}));

const InstalledSDK = () => {
  const classes = installedSDKStyles();
  const [dataLoaded, setDataLoaded] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [dataCategories, setDataCategories] = React.useState([]);

  useEffect(() => {      
    getInstalledSDK();
  }, []);

  // for date sort (most recent first)
  function custom_sort(a, b) {
    return new Date(b.lastSeenDate).getTime() - new Date(a.lastSeenDate).getTime();
  }

  function getReadableDate(date) {
    var readableDate = new Date(date);
    return readableDate.toDateString();
  }

  const getInstalledSDK = async () => {
    await getInstalledSDKData('installed.json')
      .then(res => {
        // sort by date (most recent first)
        res.data.installedSdks.sort(custom_sort);
        setData(res)
        console.log(res);

        var list = [];
        res.data.installedSdks.forEach(function (item) {
          if (!list.includes(JSON.stringify(item.categories))) {
            list.push(JSON.stringify(item.categories));
          }
        });
        list.sort();
        setDataCategories(list);
      })
    setDataLoaded(true);
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card className={classes.cardOuter}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={10}>
                  <Typography className={classes.title} align="left" variant="h2" color="inherit" noWrap>Installed SDKs</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  {dataLoaded === true && 
                    <Typography align="right" variant="h2" color="inherit" noWrap>{data.data.installedSdks.length}</Typography>
                  }
                </Grid>
                <Grid item xs={12} md={12}>
                  {dataLoaded === true && 
                    <>
                      <div>
                        <Grid container spacing={2}>
                          {dataCategories.map((dataCategoryItem, outerKey) => {
                            return (
                              <Grid item xs={12} md={6} key={outerKey}>
                                <Typography className={classes.catName} align="left" variant="h3" color="inherit" noWrap>{JSON.parse(dataCategoryItem)}</Typography>
                                {data.data.installedSdks.map((sdkItem, key) => {
                                  if (dataCategoryItem === JSON.stringify(sdkItem.categories)) {
                                    return (
                                      <Typography key={key} align="left" variant="body1" color="inherit" noWrap>{sdkItem.name}</Typography>
                                    )
                                  }
                                })}
                              </Grid>
                            )
                          })}
                        </Grid>
                      </div>
                    </>
                  }
                </Grid>

                {dataLoaded === true && 
                  <Grid item xs={12} md={12}>
                    <Typography align="left" variant="body1" color="inherit" noWrap>Last update: {getReadableDate(data.data.installedSdks[0].lastSeenDate)}</Typography>
                  </Grid>
                }
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InstalledSDK;
