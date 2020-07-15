import React, { Component } from 'react'

export class Home extends Component {
  
  render() {

    const app = { 
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer',
      options: ['One', 'Two']
    }

    function renderOptions () {
      return app.options.length > 0 ? 'Here are your options' : 'No options'
    };

    const onFormSubmit = (e) => {
      e.preventDefault()
    }

    return (

      <div>
        <h1>{app.title}</h1>
        {(app.subtitle && <p>Subtitle: {app.subtitle}</p>)}
        <p>{renderOptions()}</p>
        <ol>
          <li>Item one</li>
          <li>Item two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Home
