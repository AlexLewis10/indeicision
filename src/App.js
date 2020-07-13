import React from 'react';
import Home from './components/home'

const getFirstName = (name) => name.split(' ')[0]


console.log(getFirstName("Alex Lewis"))

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;


