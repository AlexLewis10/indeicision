import React, { Component } from 'react'

export class AddOption extends Component {
  constructor(props) {
    super(props) 
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddOption (e) {
    e.preventDefault()
    const option = e.target.elements.addOption.value.trim()
    if (option) {
      this.props.handleAddOption(option)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='addOption' />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddOption
