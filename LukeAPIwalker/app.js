import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'

import SearchForm from './components/SearchForm'
import Planet from './components/Planet'

function App() {
  return (
    <div className="App">
      <SearchForm/>
      <Router>
        <Planet path='/planets/:id'/>
      </Router>
    </div>
  );
}

export default App;
