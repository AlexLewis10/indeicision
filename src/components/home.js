import React, { Component } from 'react'
import Header from './header'
import Action from './action'
import Options from './options'
import AddOption from './addOption'

export class Home extends Component {
  render() {
    return (
      <div>        
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

export default Home

