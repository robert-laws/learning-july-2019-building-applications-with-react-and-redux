import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Header = () => {
  const activeStyle = { color: "#F5FB2A" };

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
    spacer: {
      marginLeft: theme.spacing(3),
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React App
          </Typography>
          <Button component={ NavLink } to="/" exact activeStyle={activeStyle} className={[classes.menuButton, classes.spacer]} variant="contained" color="secondary">
            Home
          </Button>
          <Button component={ NavLink } to="/about" activeStyle={activeStyle} className={classes.menuButton} variant="contained" color="secondary">
            About
          </Button>
          <Button component={ NavLink } to="/courses" activeStyle={activeStyle} className={classes.menuButton} variant="contained" color="secondary">
            Courses
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;