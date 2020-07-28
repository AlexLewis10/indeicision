import React, { Component } from 'react'

export class AddOption extends Component {
  constructor(props) {
    super(props) 
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.addOption.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState({ error: error })

    if (!error) {
      e.target.elements.addOption.value = ''
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='addOption' />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddOption
