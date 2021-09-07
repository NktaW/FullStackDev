import React from 'react';

//Nuoli funktio joka sijoitetaan vakioarvoiseen muuttujaan App

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}



const Content = (props) => {
  console.log(props);
  return (
    <div>
       <p>
       {props.coursePart}, {props.exercise}
      </p>
      
    </div>
  )
}




const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>Number of exercises {props.exercises}</p> 
    </div>
  )
}





const App = () => {
  const course = 'Half Stack application development';

  const part1 = {
    name:'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name:'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name:'State of a component',
    exercises: 14
  }
 


  return (

    <div>
      <Header course={course} />

      <Content coursePart={part1.name} exercise={part1.exercises}/>
      <Content coursePart={part2.name} exercise={part2.exercises}/>
      <Content coursePart={part3.name} exercise={part3.exercises}/>
      <Total exercises={part3.exercises + part2.exercises + part1.exercises}/>
    </div>

    );
}


export default App;