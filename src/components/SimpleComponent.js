// Code SimpleComponentHere Here
import React from 'react';

class SimpleComponent extends React.Component {
  state = {
    mood: "happy"
  }

  handleClick = () => {
    this.state.mood === "happy" ? this.setState({mood: "sad"}) : this.setState({mood: "happy"})
  }

  render() {
    return (
      <div>
        <span onClick={this.handleClick}>{this.state.mood}</span>
      </div>
    )

  }
}

export default SimpleComponent;
