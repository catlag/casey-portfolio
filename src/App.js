import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';
import './stylesheets/nav_bar.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Illustration from './illustration';
import About from './about';
import GameDesign from './game_design';
import GraphicDesign from './graphic_design';
import ProjectList from './project_list';
import Nav from './nav_bar';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact component={ProjectList} path="/" />
              <Route exact component={Illustration} path="/illustration" />
              <Route exact component={GameDesign} path="/game_design" />
              <Route exact component={GraphicDesign} path="/graphic_design" />
              <Route exact component={About} path="/about" />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
