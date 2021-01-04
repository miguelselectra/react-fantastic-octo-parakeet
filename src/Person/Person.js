import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
  render() {
    return (
      <div className="Person">
        <h1>- {this.props.name}</h1>
        <h4>{this.props.children}</h4>
        <input
          onChange={this.props.changeFunc}
          value={this.props.name}
        ></input>
      </div>
    );
  }
}

export default Person;
