import React, { Component } from 'react'

export class Action extends Component {

  handlePick() {
    
  }

  render() {
    return (
      <div>
        <button 
        onClick={this.handlePick}
        disabled={!this.props.hasOptions}
        >
          What should I do?</button>
      </div>
    )
  }
}

export default Action
