import React, { useEffect, useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => console.log(data))
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="flex flex-col px-10">
            <div className="flex flex-row justify-around">
                <div><h1>card1</h1></div>
                <div><h1>card2</h1></div>
                <div><h1>card3</h1></div>
            </div>
            <div className="flex flex-row justify-around">
                <div><h1>card4</h1></div>
                <div><h1>card5</h1></div>
                <div><h1>card6</h1></div>
            </div>
            <div className="flex flex-row justify-around">
                <div><h1>card7</h1></div>
                <div><h1>card8</h1></div>
                <div><h1>card9</h1></div>
            </div>
        </div>
    );
};

export default Courses;