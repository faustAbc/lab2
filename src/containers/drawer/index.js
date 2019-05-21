import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import InfoIcon from '@material-ui/icons/Info';
import SendIcon from '@material-ui/icons/Send';
import styles from './index.css';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(styles);

function Drawer({ config }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = open => () => {
    setState({ open });
  };

  const iconStack = [
    <SendIcon color="secondary" />,
    <ViewQuiltIcon color="secondary" />,
    <FavoriteIcon color="secondary" />,
    <InfoIcon color="secondary" />,
    <FastfoodIcon color="secondary" />,
    <DashboardIcon color="secondary" />,
  ];

  const sideList = (
    config.map((list, listIndex) =>
      <List key={listIndex}>
        {list.map((routeConfig, routeIndex) => (
          <Link className={classes.link} to={routeConfig.link} key={routeConfig.link}>
            <ListItem button>
              <ListItemIcon>
                {iconStack.length && iconStack.pop()}
              </ListItemIcon>
              <ListItemText primary={routeConfig.text} />
            </ListItem>
          </Link>
        ))}
        {listIndex !== config.length - 1 && <Divider />}
      </List>
    )
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        color="primary"
        className={classes.button}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={state.open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default Drawer;