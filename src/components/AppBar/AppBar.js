// import components from Material UI and React
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// create styling for components
const styles = {
  root: {
    flex: 1,
  },
  nav: {
    background: '#24292e',
    padding: 20
  },
  navTitle: {
    margin: 20,
    fontSize: 36,
    alignSelf: 'center',
    color: '#fff',
  }
};

// Stateless component that takes in props such as logo and title text
function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <Typography variant="title">
          {props.logo}
        </Typography>
        <Typography variant="title" className={classes.navTitle}>
          {props.title}
        </Typography>
      </div>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
