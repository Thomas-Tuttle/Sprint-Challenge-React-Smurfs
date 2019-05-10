import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = ()=> {
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="...Smurfs Name?"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="...Smurfs Age?"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="...Smurfs Height?"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add Your Smurf!</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;