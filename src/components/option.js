import React, { Component } from 'react'

export class Option extends Component {
  render() {
    return (
      <div> 
        {this.props.optionText}
      </div>
    )
  }
}

export default Option
