import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Courses from './components/courses/courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header></Header>
      <Courses></Courses>
      
    </>
  )
}

export default App
