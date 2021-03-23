import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Auth from "./Components/BackEndLogic/Auth";
//import AccountsPage from "./Components/Accounts/accounts_page";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact={true} path="/" render={() => (
          <div className="App">
            <Auth>
              <p>a</p>
              <p>b</p>
            </Auth>
          </div>
        )} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
