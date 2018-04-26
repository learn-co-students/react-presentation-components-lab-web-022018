// Code SimpleComponentHere Here
import React from 'react'

class SimpleComponent extends React.Component{
  constructor(props){
    super(props)
    console.log(props);
    this.state = {mood: "happy"}
  }
  handleClick = ()=>{
    const mood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({mood: mood})
  }
  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    ) //return
  }//render
}//end class




export default SimpleComponent
