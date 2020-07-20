import React, { Component } from 'react'

export class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    )
  }
}

export default Header
