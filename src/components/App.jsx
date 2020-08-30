import React, { Component } from 'react';
import Header from './header.components';

import './App.css';
import UsersList from './UsersList';

class App extends Component {
  state = {
    users: [],
    text: '',
  };

  componentDidMount() {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className="ui container">
        <Header handleTextChange={this.handleChange} />
        <UsersList users={this.state.users} text={this.state.text} />
      </div>
    );
  }
}

export default App;
