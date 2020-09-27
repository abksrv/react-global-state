import React from 'react';
import './App.css';
import { ViewPartA } from './ui/ViewPartA';
import { ViewPartB } from './ui/ViewPartB';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <ViewPartA />
      <ViewPartB />
    </div>
  );
}

export default App;
