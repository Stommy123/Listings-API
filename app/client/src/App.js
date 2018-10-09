import React, { Component } from 'react';
import ListsContainer from './components/ListsContainer'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              style={{flexGrow: 1}}
              >My Listings!</Typography>
          </Toolbar>
        </AppBar>
        <ListsContainer />
        </div>
    );
  }
}

export default App;
