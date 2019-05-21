import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './index.css';
import { Dialog, BuyingConfirmation } from 'containers/dialog';

const ImgMediaCard = ({ classes, img, title }) => (
  <Dialog img={img} title={title} body={BuyingConfirmation}>
    <Card className={classes.card}>
      <CardActionArea>
        <Grid container justify="center" alignItems="center">
          <CardMedia
            component="img"
            className={classes.media}
            src={img}
            title="Contemplative Reptile"
          />
        </Grid>
        <CardContent>
          <Grid container justify="center">
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  </Dialog>
);


export default withStyles(styles)(ImgMediaCard);