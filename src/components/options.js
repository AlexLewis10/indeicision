import React, { Component } from 'react'
import Option from './option'


export class Options extends Component {


    



  render() {
    return (
      <div>
        <p>You have {this.props.options.length} Options</p>
        <div>
        {this.props.options.map((option) => <p key={option}>{option}</p>)}
        </div>
        <Option />
      </div>
    )
  }
}

export default Options
