import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Parent } from './Parent';
import CounterContext from './CounterContext';


function App() {
  const counterVal = useState(0);
  //const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={counterVal}>
      <div className="App">
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
