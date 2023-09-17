import { useEffect } from "react";
import { useState } from "react";
// import PropTypes from 'prop-types';
import Course from "../course/Course";
import PropTypes from "prop-types";

const Courses = ({handleSelect, handleCreditHour, handleTotalCredit}) => {
  const [counts, setCounts] = useState([]);

  useEffect( () => {
    // console.log('UseEffect')
    fetch('course.json')
      .then(res => { 
        return res.json()
      })
      // .then(data => console.log(data))
      .then(data => {
        setCounts(data);
      })
  }, []);
  

  return (
    <div className="grid grid-cols-3 gap-4 px-10">
      {/* {console.log("rendering")} */}
      {/* {console.log(counts[1].title)} */}
      {/* <h1>Courses: {counts.length}</h1> */}
      
      {
         counts.map( (count) => <Course 
         key={count.id} 
         course={count}
         handleSelect={handleSelect}
         handleCreditHour={handleCreditHour}
         handleTotalCredit={handleTotalCredit}></Course>)
    }
      {/* {
         counts.map( (count) => {
          return <p> {count.title} </p>;
         })
    } */}
    </div>
    //  {
    //     courses.map(course => <Courses
    //         key={course.id}
    //         course={course}></Courses>)
    // }
    // <div className="flex flex-col px-10">
    //     <div className="flex flex-row justify-around">
    //         <div><h1>card1</h1></div>
    //         <div><h1>card2</h1></div>
    //         <div><h1>card3</h1></div>
    //     </div>
    //     <div className="flex flex-row justify-around">
    //         <div><h1>card4</h1></div>
    //         <div><h1>card5</h1></div>
    //         <div><h1>card6</h1></div>
    //     </div>
    //     <div className="flex flex-row justify-around">
    //         <div><h1>card7</h1></div>
    //         <div><h1>card8</h1></div>
    //         <div><h1>card9</h1></div>
    //     </div>
    // </div>
  );
};

Courses.propTypes = {
  // course: PropTypes.object.isRequired,
  handleSelect: PropTypes.func,
  handleCreditHour: PropTypes.func,
  handleTotalCredit: PropTypes.func,
  
};

export default Courses;
