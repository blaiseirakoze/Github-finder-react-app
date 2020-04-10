import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/user/Users'
import Search from './components/user/Search'
import Alert from './components/layout/Alert'
import axios from 'axios'

class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null
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

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })

    setTimeout(() => this.setState( {alert: null} ), 5000 )
  }

  render() {
    const { users, loading } = this.state

    return (
      <div className="App">
        <Navbar />
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUser}
          clearUsers={this.clearUser}
          showClearBtn={users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <div >
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
