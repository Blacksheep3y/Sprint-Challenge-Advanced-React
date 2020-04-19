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

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(player => {
      this.setState({ ...this.state, wwc: player });
      console.log('WWC DATA: ', this.state.wwc);
    })
    .catch(err => {
      console.log("Err: ", err);
    });
  }

  render() {
    return (
      <div className="App-container">
        <h1 className="App-title">Welcome World Cup Players!</h1>
        <WWC 
        propName={this.state.wwc.map(item => (item.name))}
        propCountry={this.state.wwc.map(item => (item.country))}
        propSearches={this.state.wwc.map(item => (item.searches))}
        propId={this.state.wwc.map(item => (item.id))}
        />
      </div>
    );
  }
}

export default App;