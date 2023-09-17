import { useEffect } from "react";
import { useState } from "react";
import './App.css'
import Header from './components/header/Header'
import Courses from './components/courses/Courses'
import Carts from './components/carts/Carts'
import Course from './components/course/Course'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const [creditHours, setCreditHours] = useState(20);

  const [totalCredits, setTotalCredits] = useState(0);

  const handleSelect = (course) => {
    const newCourse = [...selectedCourses, course];
    setSelectedCourses(newCourse);
    console.log(newCourse)
  };

  const handleCreditHour = time =>{
    console.log('Credit Hour',time);
    const newCreditHour = creditHours - time;
    setCreditHours(newCreditHour);
    console.log(newCreditHour);
  }
  const handleTotalCredit = credit =>{
    console.log('Total Credit',credit);
    const newTotalCredits = totalCredits + credit;
    setTotalCredits(newTotalCredits);
  }

  return (
    <>
      
      <Header></Header>
      <main className='flex justify-around'>
        <Courses handleSelect={handleSelect} handleCreditHour={handleCreditHour} handleTotalCredit={handleTotalCredit}></Courses>
        <Carts selectedCourses={selectedCourses} creditHours={creditHours} totalCredits={totalCredits}></Carts>
      </main>
      
    </>
  )
}

export default App
