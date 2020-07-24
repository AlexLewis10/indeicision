import React, { Component } from 'react'
import Header from './header'
import Action from './action'
import Options from './options'
import AddOption from './addOption'
import Counter from './counter'

export class Home extends Component {
  constructor(props) {
    super(props)
      this.state = {
        options: ['thing one', 'thing two', 'thing three']
      }
    }

    render() {
      const title = 'Indecision'
      const subtitle = 'Put your life in the hands of a computer'
      return (
        <div>        
          <Header title={title} subtitle={subtitle} />
          <Action hasOptions={this.state.options.length > 0}/>
          <Options options={this.state.options}/>
          <AddOption />
          <Counter />
        </div>
      )
    }
  }





export default Home

