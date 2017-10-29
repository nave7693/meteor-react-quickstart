import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
    this.state = {
      counter: 0,
    };
  }

  buttonClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.buttonClick}>Click Me</button>
        <p>You've pressed the button {this.state.counter} times.</p>
      </div>
    );
  }
}

export default Hello;