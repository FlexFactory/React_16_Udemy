import React from 'react';

export default class Validator extends React.Component {
  render() {
    const minLength = 5;
    const maxLength = 15;
    const textLength = this.props.textLength;

    let warningMessage = null;

    if (textLength > 0 && textLength < minLength) {
      warningMessage = <p className='warning-message'>Text too short</p>;
    } else if (textLength > maxLength) {
      warningMessage = <p className='warning-message'>Text long enough</p>;
    }

    return (
      warningMessage
    )
  }
}