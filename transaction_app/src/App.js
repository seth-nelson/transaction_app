import React from 'react';
import { Header }  from './components/Header';
import { Balance }  from './components/Balance';
import { SubContainer }  from './components/SubContainer';
import { IncomeExpenses } from './components/IncomeExpenses';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div classNamer='container'>
        <Balance />
        <IncomeExpenses />
        <SubContainer />
      </div>
    </div>
  );
}

export default App;
