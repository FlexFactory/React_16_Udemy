import React from 'react';

export default class UserInput extends React.Component {
  render() {
    return (
      <div className='UserInput'>
        <h1>User Input</h1>
        <p>
          <span>Username: </span>
          <input type="text" onChange={this.props.onUsernameChange} value={this.props.username} />
        </p>
      </div>
    )
  }
}