import React, { Component } from 'react'

export class Visibility extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: false
    }
    
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  toggleVisibility() {
    this.setState((prevState) => { 
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    const info = (
      <div>
      <p>Info you can now see</p>
    </div>
    )

    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>Toggle Visibility</button>
        { this.state.visibility ? info : null }
      </div>
    )
  }
}

export default Visibility
