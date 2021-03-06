import React, { Component } from 'react'
import Header from './header'
import Action from './action'
import Options from './options'
import AddOption from './addOption'
import Counter from './counter'

export class Home extends Component {
  state = {
    options: []
  }

  handleDeleteOptions = () => {
    this.setState({ options: [] })
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    }
    this.setState((prevState) => ({ options: prevState.options.concat([option])}))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option )
    }))
  }

    componentDidMount() {
      try {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
  
        if (options) {
          this.setState({ options: options })
        }
      } catch (e) {
        // Do nothing
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options)

        localStorage.setItem('options', json)
      }
      
    }

    componentWillUnmount() {
      alert('component will unmount')
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
          />
          <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          /> 
          <AddOption 
            handleAddOption={this.handleAddOption}
          />
          <Counter count={0}/>
        </div>
      )
    }
  }



export default Home

