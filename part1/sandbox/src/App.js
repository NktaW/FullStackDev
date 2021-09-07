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
       {props.corusePart}, {props.exercise}
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
  const course = {
    
    name: 'Half Stack application development',
    
    parts: [
     {
      name:'Fundamentals of React',
      exercises: 10
    },
  
     {
      name:'Using props to pass data',
      exercises: 7
    },
  
     {
      name:'State of a component',
      exercises: 14
    }
  ]
 
  }


  return (
    <div>
      <Header course={course.name} />

      <Content corusePart={course.parts[0].name} exercise={course.parts[0].exercises}/>
      <Content corusePart={course.parts[1].name} exercise={course.parts[1].exercises}/>
      <Content corusePart={course.parts[2].name} exercise={course.parts[2].exercises}/>
      <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
      
    </div>

    );
}


export default App;