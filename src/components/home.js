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

    return (
      <div>
        {(app.subtitle && <p>Subtitle: {app.subtitle}</p>)}
        <p>{renderOptions()}</p>
      </div>
    )
  }
}

export default Home
