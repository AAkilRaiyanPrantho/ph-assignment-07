import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Courses from "./components/courses/Courses";
import Carts from "./components/carts/Carts";
import Course from "./components/course/Course";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const [creditHours, setCreditHours] = useState(20);

  const [totalCredits, setTotalCredits] = useState(0);

  const handleSelect = (course) => {
    const isExist = selectedCourses.find((person) => person.id == course.id);
    if (isExist) {
      return toast("Cannot Add Twice");
      stopPropagation()
      
    } else {
      const newCourse = [...selectedCourses, course];
      setSelectedCourses(newCourse);
      console.log(newCourse);
    }
    console.log(isExist);
  };

  const handleCreditHour = (time) => {
    console.log("Credit Hour", time);
    const newCreditHour = creditHours - time;
    if (newCreditHour < 0) {
      return toast("Credit Hour Limit Expired");
    } else {
      setCreditHours(newCreditHour);
    }

    console.log(newCreditHour);
  };
  const handleTotalCredit = (credit) => {
    console.log("Total Credit", credit);
    const newTotalCredits = totalCredits + credit;
    if (newTotalCredits > 20){
      return toast("Credit Limit Expired");
    }
    else{
      setTotalCredits(newTotalCredits);
    }
    
  };

  return (
    <>
      <Header></Header>
      <ToastContainer />
      <main className="flex justify-around">
        <Courses
          handleSelect={handleSelect}
          handleCreditHour={handleCreditHour}
          handleTotalCredit={handleTotalCredit}
        ></Courses>
        <Carts
          selectedCourses={selectedCourses}
          creditHours={creditHours}
          totalCredits={totalCredits}
        ></Carts>
      </main>
    </>
  );
}

export default App;
