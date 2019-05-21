import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from 'containers/card';
import styles from './index.css';
import { Grid } from '@material-ui/core';

const CardList = ({ cardsConfig, classes }) => (
  <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="center"
    className={classes.root}
  >
    {cardsConfig.map((cardConfig, index) => (
      <Grid
        item
        key={index}
        className={classes.card}
      >
        <Card
          {...cardConfig}
        />
      </Grid>
    ))}
  </Grid>
);

export default withStyles(styles)(CardList);

