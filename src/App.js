import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Users></Users>
      </header>
    </div>
  );
}

export default App;
