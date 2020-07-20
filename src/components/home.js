import React, { Component } from 'react'
import Header from './header'
import Action from './action'
import Options from './options'
import AddOption from './addOption'

export class Home extends Component {
  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'
    const options = ['thing one', 'thing two', 'thing four']
    return (
      <div>        
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

export default Home

