import React from "react";
import Course from './components/Course';



const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  const total = course.parts.reduce((s, p) => {
    console.log("morjesta", s, p)
    return s + p.exercises
  }, 0)

  return (
    <div>
      <ul>
        <h2>
        <Course course={course} />
        </h2>
      </ul>
      <ul>
      {course.parts.map(course => <Course key={course.id}  course={course} />)}
      </ul>
      <ul>
        <h4>total amount of exercises: {total}</h4>  
      </ul>
    </div>
  )
}


export default App;
