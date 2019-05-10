import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Intro() {
  return (
    <div className='Intro'>

        <h1 className='IntroTitle'> You Found Smurf Village! </h1>
        <Link className='Peek' to="/smurfs"> Take a peek inside! </Link>

  </div>
  );
}

export default Intro;