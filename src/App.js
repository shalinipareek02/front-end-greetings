import React from 'react';
import GreetingsFunction from './Components/GreetingsFunction';
import GreetingsClass from './Components/GreetingsClass';

function App() {
  return (
    <div className="App">
      <GreetingsFunction name="Jane" />
      <GreetingsClass name="XYZ" />
    </div>
  );
}

export default App;
