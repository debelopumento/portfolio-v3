import React, { Component } from 'react';
import logo from './logo.svg';
import profilePic from '../public/images/profilePic.jpeg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={profilePic} className="App-logo" alt="logo" />
          <h2>Di Ye</h2>
          <h3>Full Stack Developer</h3>
          <h5>HTML, CSS, Javascript, React, Redux, NodeJS, Express, D3, Phaser, Passport</h5>
          <h5><span className="contactInfo">+1-(408)-477-0586</span>  <span>glamorouspull@gmail.com</span></h5>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
