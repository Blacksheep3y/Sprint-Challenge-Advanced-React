import React, { useState, useEffect } from 'react';
import './App.css';
import {useDarkMode} from './hooks/useDarkMode';
import axios from 'axios';

const App = () => {
const [players, setPlayers] = useState([]);
const [darkMode, setDarkMode] = useDarkMode(false);
 
useEffect(() => {
  axios
  .get('http://localhost:5000/api/players')
  .then(players => setPlayers(players.data))
  .catch(err => {
    console.log("Err: ", err);
  });
},[])
 
function changeMode () {
  setDarkMode(!darkMode)
}
 return (
      <div className="App-container">
        <h1 data-testid="titleApp"className="App-title">Welcome World Cup Players!</h1>
        <button onClick={changeMode}> Dark Mode </button>
        {players.map((element, index) => (
          <div key={index}>
            <h2>{element.name}</h2>
            <h2>{element.country}</h2>
            <h2>{element.searches}</h2>
          </div>
          ))}
      </div>
    );
  }

export default App;