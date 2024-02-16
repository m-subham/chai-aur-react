import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, SetCounter] = useState(15)

  // let counter = 15;

  function addValue () {
    // if (counter == 20) {
    //   SetCounter = 20
    // }
    // else{
    // counter = counter +1;       // or 
    // SetCounter(counter)         //setCounter(counter + 1)
    // }

    SetCounter(counter =>counter +1) 
    SetCounter(counter =>counter +1) 
    SetCounter(counter =>counter +1) 
    SetCounter(counter =>counter +1) 

  }

  function RemoveValue () {
    // if (counter ==0) {
    //   SetCounter = 0
    // }
    // else{
    // SetCounter(counter-1)
    // }

    SetCounter(counter -1)
  }

  return (
    <>
      <h1>Chai aur react chal raha hai</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
       <br />

      <button onClick={RemoveValue}
      >Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
