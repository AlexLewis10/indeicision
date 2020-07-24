import React, { Component } from 'react'
import Header from './header'
import Action from './action'
import Options from './options'
import AddOption from './addOption'
import Counter from './counter'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
      this.state = {
        options: ['thing one', 'thing two', 'thing three'],
      }
    }

    handleDeleteOptions() {
      this.setState({ options: [] })
    }

    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length)
      const option = this.state.options[randomNum]
      alert(option)
    }

    render() {
      const title = 'Indecision'
      const subtitle = 'Put your life in the hands of a computer'
      return (
        <div>        
          <Header title={title} subtitle={subtitle} />
          <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            selectedOption={this.state.selectedOption}
          />
          <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
          /> 
          <AddOption />
          <Counter />
        </div>
      )
    }
  }





export default Home

