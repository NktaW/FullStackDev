import React from "react";
import Courses from './components/Courses';



const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
 

  //Using higer order function here...
  //Reduce function to get the sum of all exercises
  const totalOne = courses[0].parts.reduce((s, p) => {
    console.log("morjesta", s, p)
    return s + p.exercises
  }, 0)

  const totalTwo = courses[1].parts.reduce((s, p) => {
    console.log("morjesta", s, p)
    return s + p.exercises
  }, 0)

  return (
    <div>
      <ul>
        <h1>
        <Courses courses={courses[0]} />
        </h1>
      </ul>
      <ul>
      {courses[0].parts.map(course => <Courses key={course.id}  courses={course}/>)}
      </ul>
      <h4>total amount of exercises: {totalOne}</h4>
      <h2>
        <Courses courses={courses[1]}/>
      </h2>
      <ul>{courses[1].parts.map(course => <Courses key={course.id}  courses={course}/>)}
      </ul>
      <h4>total amount of exercises: {totalTwo}</h4>
    </div>
  )
}


export default App;
