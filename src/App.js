import React from 'react'
import './App.css'
import Nav from './Component/Navbar/Nav'
import Form from './Component/Form/Form'
import Display from './Component/Display/Display'

function App() {
  return (
    <div className='main'>
      <Nav/>
      <Form/>
      <Display/>
    </div>
  )
}

export default App