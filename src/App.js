// import files and packages
import AppBar from './components/AppBar';
import axios from 'axios';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


// styling for the app page
const styles = () => ({
  app: {
    textAlign: 'center',
    height: '100vh',
    flex: 1
  },
});

// define App that extends React's Component class
class App extends Component {

  state = {
  }

  // function to fetch all data when componentWillMount
  componentWillMount() {
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.app}>

        {/* Create AppBar and pass in logo and title as props */}
        <AppBar logo="" title="GetHub" />

      </div>
    );
  }
}

export default withStyles(styles)(App);
