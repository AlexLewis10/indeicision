import React from 'react';
import Home from './components/home'

let count = 0
const addOne = () => {
  // count += 1
  console.log('+ 1')
}

const minusOne = () => {
  console.log('-1')
}

const reset = () => {
  console.log('reset')
}

const template = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
)


function App() {
  return (
    <div>
      <Home />
      {template}
    </div>
  );
}

export default App;


