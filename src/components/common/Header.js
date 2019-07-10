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
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(3),
    }
  }));

  const classes = useStyles();

  const LinkRef = React.forwardRef((props, ref) => <div ref={ref}><NavLink {...props} /></div>)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React App
          </Typography>
          <Button component={ LinkRef } to="/" exact activeStyle={activeStyle} className={classes.spacer} variant="contained" color="secondary">
            Home
          </Button>
          <Button component={ LinkRef } to="/about" activeStyle={activeStyle} className={classes.menuButton} variant="contained" color="secondary">
            About
          </Button>
          <Button component={ LinkRef } to="/courses" activeStyle={activeStyle} className={classes.menuButton} variant="contained" color="secondary">
            Courses
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
