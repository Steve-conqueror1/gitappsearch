import React, { Component } from 'react';
import Header from './header.components';
import { connect } from 'react-redux';
import { setInputValue, fetchUsers } from '../actions';

import './App.css';
import UsersList from './UsersList';

const mapStateToProps = (state) => {
  return {
    text: state.searchUsers.text,
    users: state.requestUsers.users,
    isPending: state.requestUsers.isPending,
    error: state.requestUsers.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => dispatch(setInputValue(e.target.value)),
    onRequestUsers: () => dispatch(fetchUsers()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestUsers();
  }

  render() {
    // const {users} = this.props.searchUsers
    const { text, handleChange, users, isPending } = this.props;

    return isPending ? (
      <h2>Loading</h2>
    ) : (
      <div className="ui container">
        <Header handleTextChange={handleChange} />
        <UsersList users={users} text={text} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
