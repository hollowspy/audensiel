import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Naviguation.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img className="logo" src="/img/Audensiel.png" alt="" />
          <Typography variant="title" color="inherit" className={classes.flex}>
            Test React Audensiel - NIEDZWIECKI Julien
          </Typography>
          <Link to="/">
            <Button>HOME</Button>
          </Link>
          <Link to="/music">
            <Button>MUSIC</Button>
          </Link>
          <Link to="/prime">
            <Button>PRIME</Button>
          </Link>
          <Link to="/graph">
            <Button>GRAPH</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
