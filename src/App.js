import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/user/Users'
import Search from './components/user/Search'
import axios from 'axios'

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {

  //   this.setState({ loading: true })

  //   const res = await axios.get(`https://api.github.com/users?client_id=${
  //     process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
  //     process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

  //   this.setState({ users: res.data, loading: false })
  // }

  searchUser = async (text) => {
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
      process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data.items, loading: false })
  }

  clearUser = () => this.setState({ users: [], loading: false })


  render() {
    const { users, loading } = this.state

    return (
      <div className="App">
        <Navbar />
        <Search
          searchUsers={this.searchUser}
          clearUsers={this.clearUser}
          showClearBtn={users.length > 0 ? true : false}
        />
        <div className='container'>
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
