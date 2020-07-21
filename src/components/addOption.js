import React, { Component } from 'react'

export class AddOption extends Component {

  handleAddOption (e) {
    e.preventDefault()
    const option = e.target.elements.addOption.value
    if (option) {
      alert('Add Option')
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
