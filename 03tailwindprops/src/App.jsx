import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
      <h1 className='bg-blue-200 text-black p-4 rounded-md mb-4'>Tailwind css</h1>
      <Card btnName="subham" username="Subham Maharana"/>
      <Card username="chai aur code"/>
      <Card/>
    </>
  )
}

export default App
