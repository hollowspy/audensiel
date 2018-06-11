import React, { Component } from 'react';
import './App.css';
import Graph from './Components/Graph/Graph';
import Music from './Components/Music/Music';
import Prime from './Components/Prime/Prime';
import Home from './Components/Home/Home';
import Naviguation from './Components/Naviguation/Naviguation';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Naviguation />
        </header>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/graph" component={Graph} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/prime" component={Prime} />
        </Switch>
      </div>
    );
  }
}

export default App;
