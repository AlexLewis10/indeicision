import React, { Component } from 'react'
import Action from './action'
import Options from './options'
import AddOption from './addOption'

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

export default Header

