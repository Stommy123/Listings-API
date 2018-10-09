import React, { Component } from 'react';
import ListsContainer from './components/ListsContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Listings!</h1>
        </header><hr/><br/>
        <ListsContainer />
      </div>
    );
  }
}

export default App;
