import React from 'react';
import ReactDOM from 'react-dom'
import createReactClass from'create-react-class'


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


  const NavComponent = createReactClass({
    render: function() {
      return (
        <nav className="Nav">
          <div className="nav-container">
            <Link to="/" className="nav-title">
              <h1>
                Title
              </h1>
            </Link>

            <div className="nav-links-container">
              <ul className="nav-item-wrapper">
                <li className="nav-item">
                  <Link className="nav-link" to="/illustration">illustration</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/game_design">Game Design</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/graphic_design">Graphic Design</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  });

 export default NavComponent;



