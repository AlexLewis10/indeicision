import React, { Component } from 'react'

export class Action extends Component {

  handlePick() {
    
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

export default Action
