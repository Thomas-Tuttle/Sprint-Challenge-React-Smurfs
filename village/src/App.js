import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import {Route, NavLink, withRouter} from 'react-router-dom';
import Intro from './components/Intro'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({ smurfs: response.data})
    })
    .catch(err => console.log(err));
  }
  
  
  render() {
    return (
      <div className="App">

        <div className='Nav'>

        <NavLink exact to="/" activeClassName="activeNavButton"> Home </NavLink>

        <NavLink to="/smurfs" activeClassName="activeNavButton"> Smurfs </NavLink>

        <NavLink to="/smurf-form" activeClassName="activeNavButton"> Add </NavLink>

        </div>

        <Route exact path="/" component={Intro} />

        <Route exact path="/smurfs"
          render={props => (
        <Smurfs {...props} smurfs={this.state.smurfs} />
        )}
        />

        <Route exact path="/smurf-form"
          render={props => (
        <SmurfForm {...props} smurfs={this.state.smurfs} />
        )}
        />
        
      </div>
    );
  }
}

export default withRouter(App);
