import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Users from './users'
import Friends from './friends'

function App() {
  
  function handleClick(){
    alert('btn clicked')
  }

  return (
    <>
      
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
