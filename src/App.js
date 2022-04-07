import React from 'react';
import {Router} from '@reach/router';
// import './App.css';
import Home from './components/Home';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Router>
        <Display path='/:category/:id'></Display>
      </Router>
    </div>
  );
}

export default App;
