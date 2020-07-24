import React, { Component } from 'react'
import Option from './option'


export class Options extends Component {

  render() {
    return (
      <div>
        <p>You have {this.props.options.length} Options</p>
        <div>
          {this.props.options.map((option) => <Option key={option} optionText={option} />)}
          <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        </div>
      </div>
    )
  }
}

export default Options
