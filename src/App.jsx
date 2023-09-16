import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Courses from './components/courses/courses'
import Carts from './components/carts/Carts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header></Header>
      <main className='flex justify-between'>
        <Courses></Courses>
        <Carts></Carts>
      </main>
      
    </>
  )
}

export default App
