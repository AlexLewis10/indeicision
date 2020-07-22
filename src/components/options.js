import React, { Component } from 'react'
import Option from './option'


export class Options extends Component {
constructor(props) {
  super(props)
  this.handleRemoveAll = this.handleRemoveAll.bind(this)
}

  handleRemoveAll () {
    console.log(this.props.options) 
  }

  render() {
    return (
      <div>
        <p>You have {this.props.options.length} Options</p>
        <div>
        {this.props.options.map((option) => <Option key={option} optionText={option} />)}
        <button onClick={this.handleRemoveAll}>Remove All</button>
        </div>
      </div>
    )
  }
}

export default Options
