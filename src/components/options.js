import React from 'react'
import Option from './option'

const Options = (props) => {
  return (
    <div>
      <p>You have {props.options.length} Options</p>
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
            />
          )  
        )}
      </div>
    </div>
  )
}

export default Options
