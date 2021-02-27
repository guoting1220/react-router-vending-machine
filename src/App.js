import React from 'react';
import './App.css';

import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Popcorn from './Popcorn';
import Lolipop from './Lolipop';
import NavBar from './NavBar';

import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/popcorn">
          <Popcorn />
        </Route>
        <Route exact path="/lolipop">
          <Lolipop />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
