import React from "react";


const Courses = ({courses}) => {
    //console.log('jippii...', courses);
    return (
        <div>
             {courses.name} {courses.exercises}       
        </div>
    
    )
}



export default Courses;