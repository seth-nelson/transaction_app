import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header }  from './components/Header';
import HomePage  from './components/HomePage';
import AddTransaction  from './components/transactions/AddTransaction';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div classNamer='container'>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/AddTransaction' component={ AddTransaction } />
        </div>
      </div>
    </Router>
  );
}

export default App;
