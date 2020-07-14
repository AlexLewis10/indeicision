import React from 'react';
import Home from './components/home'

const multiplier = {
  numbers: [2, 4, 6],
  multiplyBy: 2,
  multiply () {
    return this.numbers.map((number) => number * this.multiplyBy)
 }
}

console.log(multiplier.multiply())



function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;


