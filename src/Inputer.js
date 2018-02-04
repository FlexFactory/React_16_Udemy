import React from 'react';

export default class Inputer extends React.Component {
  render() {
    return (
      <div className='Inputer'>
        <h2>Input text</h2>
        <input type="text" onChange={this.props.onTextChange} value={this.props.longText}/>
      </div>
    )
  }
}