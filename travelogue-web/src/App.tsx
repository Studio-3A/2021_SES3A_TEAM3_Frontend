import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter  } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import FrontPage from "./components/frontPage";

import Auth from "./components/BackEndLogic/Auth";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={withRouter(FrontPage)}>
        </Route>
      </Switch>
  </Router>
  </div>
  );
}

export default App;

/*
<div className="App">
  <Auth>
    <p>a</p>
    <p>b</p>
  </Auth>
</div>
*/
