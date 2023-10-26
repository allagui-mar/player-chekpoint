import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import PlayersList from './PlayerList';

function App() {
  return (
    <div className="App">
       <h1>Football Players</h1>
      <PlayersList/>
     
    </div>
  );
}

export default App;