import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    username: 'Bob Dylan'
  };

  onUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput onUsernameChange={this.onUsernameChange.bind(this)}
                   username={this.state.username} />
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
