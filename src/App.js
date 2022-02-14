import React, {Component} from "react";

import './App.css'

 export default class App extends Component{
  
  state = {
     count:0
   }
   add = ()=>{
     const {count} = this.state
     if(count < 10)
     this.setState({
       count: count +1
     })

   }
   remove = () => {
    const {count} = this.state
    if(count > 0)
    this.setState({
      count: count -1
    })
  }

    zerar  = () => {
      const {count} = this.state
      if(count > 0)
      this.setState({
        count: 0
      })
 }
  render() {
    const {count} = this.state 
    const{add, remove, zerar} = this 
   
  return (
      <div ClassName= 'countainer' >
    <h1 >React Counter App</h1>
    <div ClassName= 'counter'>
        <button  onClick={add}>+</button>
       <h2>{count}</h2>
        <button onClick={remove}>-</button>
        <p></p>
        <button onClick={zerar}>C</button>
      </div>
      </div>
    )
  }
}
