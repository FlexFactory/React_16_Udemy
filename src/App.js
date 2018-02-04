import React, {Component} from 'react';
import './App.css';
import Inputer from "./Inputer";
import Validator from './Validator';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    longText: ''
  };

  onTextChange = (event) => {
    this.setState({
      longText: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Inputer onTextChange={this.onTextChange.bind(this)} longText={this.state.longText} />
        <h2>Output text</h2>
        <Validator textLength={ this.state.longText.length }/>
        <CharComponent longText={this.state.longText} />
      </div>
    );
  }
}

export default App;
