import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import PersonFunc from './Person/PersonFunc';

class App extends Component {
  state = {
    namePerson: 'Max',
    namePersonFunc: 'Luis',
  }

  clickTest = (newName) => {
    this.setState({
      namePerson: newName,
    });
  }

  nameInputHandler = (event) => {
    this.setState({
      namePersonFunc: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Person
          name={this.state.namePerson} 
          func={this.clickTest.bind(this, 'el putaso')}
          changeFunc={this.nameInputHandler} 
        />
        <PersonFunc
          name={this.state.namePersonFunc}
          func={this.clickTest.bind(this, 'el PEPASO')}
          changeFunc={this.nameInputHandler} 
        />
      </div>
    );
  }
}

export default App;
