import React from 'react'
import Option from './option'

const Options = (props) => {
  return (
    <div>
      <p>You have {props.options.length} Options</p>
      <div>
        {props.options.map((option) => <Option key={option} optionText={option} />)}
        <button onClick={props.handleDeleteOptions}>Remove All</button>
      </div>
    </div>
  )
}

export default Options
