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
        <h1 data-testid="titleApp" className="App-title">Welcome World Cup Players!</h1>
        <button data-testid="buttonDarkMode" onClick={changeMode}> Dark Mode </button>
        {players.map((element, index) => (
          <div data-testid="arraySTUFF" key={index}>
            <h2 data-testid="arraySTUFF_NAME">{element.name}</h2>
            <h2 data-testid="arraySTUFF_COUNTRY">{element.country}</h2>
            <h2 data-testid="arraySTUFF_SEARCHES">{element.searches}</h2>
          </div>
          ))}
      </div>
    );
  }

export default App;