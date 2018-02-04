import React from 'react';

export default class CharComponent extends React.Component {
  state = {
    charArray: []
  };

  onLetterClick = (index) => {
    const charArray = [...this.state.charArray];
    charArray.splice(index, 1);
    this.setState({ charArray: charArray });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      charArray: nextProps.longText.split('')
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.charArray.map((char, index) => <li className='char' key={index}
                                                         onClick={this.onLetterClick.bind(this, index)}>{char}</li>)}
        </ul>
      </div>
    )
  }
}