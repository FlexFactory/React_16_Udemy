import React from 'react';

export default class UserOutput extends React.Component {
  render() {
    const style = {
      backgroundColor: '#eee',
      width: '500px',
      border: '1px solid #ddd'
    };

    return (
      <div style={style}>
        <h1>UserOutput</h1>
        <p>Username:</p>
        <p>{ this.props.username }</p>
      </div>
    )
  }
}