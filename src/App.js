import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import User from './components/user/Useritem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <User />
      </div>
    );
  }
}


export default App;
