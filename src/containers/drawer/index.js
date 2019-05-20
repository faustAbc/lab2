import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './index.css';

const useStyles = makeStyles(styles);

function Drawer({ config }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = open => () => {
    setState({ open });
  };

  const sideList = (
    config.map((list, listIndex) =>
      <List key={list}>
        {list.map(text => (
          <ListItem button key={text}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
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