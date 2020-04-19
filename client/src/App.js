import React from 'react';
import './App.css';
import WWC from './components/WCC';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      wwc: []
    };
  }


  render() {
    return (
      <div className="App-container">
        <h1 className="App-title">Welcome World Cup Players!</h1>
        <WWC />
      </div>
    );
  }
}

export default App;