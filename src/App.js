import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ClusterPage from "./components/ClusterPage";

function App() {
    return (
          <Router>
              <div className="main-container">
                  <NavBar />
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/:addressHash"
                             render={props => <ClusterPage key={props.location.key} {...props} />}
                      />
                  </Switch>
              </div>
          </Router>
    );
}

export default App;
