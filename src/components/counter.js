import React, { Component } from 'react'

export class Counter extends Component {
  constructor() {
    super()
    this.handleAddOne = this.handleAddOne.bind(this)
    this.state = {
      count: 0
    }
  }

  handleAddOne = () => {
    
  }

  handleMinusOne() {

  }

  handleReset() {

  }


 
  render() {
    return (
      <div>
        <h1>Count: </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

export default Counter
