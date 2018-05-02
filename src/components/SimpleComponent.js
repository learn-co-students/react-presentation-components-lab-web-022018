import React from 'react'

class SimpleComponent extends React.Component{
  constructor(){
    super();
    this.state = {
      mood: "happy"
    }
  }
  handleMood = event => {
  if (this.state.mood === "happy")
    this.setState({
      mood: "sad"
    })
  else {
    this.setState({
      mood: "happy"
    })
  }
  }
render(){
  return(
    <div onClick={this.handleMood} value={this.state.mood}>
    {this.state.mood}
    </div>
  )
}
}


export default SimpleComponent
