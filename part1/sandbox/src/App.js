import React from 'react';

//Nuoli funktio joka sijoitetaan vakioarvoiseen muuttujaan App

const App = () => {

  const now = new Date();
  const a = 10;
  const b = 20;




  console.log('Hello from komponentti')
  return (
  <div>
    <p>Hello World, it is {now.toString()}</p>
    <p> {a} plus {b} is {a + b}</p>
    </div>
    );
}


export default App;