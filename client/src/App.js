import React from 'react';
import {Router} from "@reach/router";
import NavBar from "./NavBar";
import Login from "./Login";
import Verify from "./Verify"
import Home from "./Home";
import './App.css';

function App(){
  return (
    <div>
      <header>
        <Router>
          <NavBar default />
        </Router>
      </header>
      <main>
        <Router>
          <Home path="/" />
          <Verify path="/verify" />
          <Login path="/login" />
        </Router>
      </main>
    </div>
  );
}

export default App;
