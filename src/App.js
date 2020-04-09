import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/user/Users'
import axios from 'axios'

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const res = await axios.get('https://api.github.com/users')

    this.setState({ users: res.data, loading: false })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Users />
      </div>
    );
  }
}


export default App;
