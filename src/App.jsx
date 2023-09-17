import { useEffect } from "react";
import { useState } from "react";
import './App.css'
import Header from './components/header/Header'
import Courses from './components/courses/Courses'
import Carts from './components/carts/Carts'
import Course from './components/course/Course'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSelect = (course) => {
    setSelectedCourses([...selectedCourses, course]);
    console.log('Selected task handling')
  };

  return (
    <>
      
      <Header></Header>
      <main className='flex justify-around'>
        <Courses handleSelect={handleSelect}></Courses>
        <Carts></Carts>
      </main>
      
    </>
  )
}

export default App
