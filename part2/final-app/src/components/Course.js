import React from "react";


const Course = ({course}) => {
    console.log('jippii...', course);
    return (
        <div>
            {course.name} {course.exercises} {course.id}
        </div>
    
    )
}



export default Course;