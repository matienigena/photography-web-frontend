import React from 'react'
import Course from './Course'

const Courses = ({courses}) => {
    return (
        <div>
            {courses.map( (course, index) => (
                <Course 
                    key={index}
                    course={course} 
                />
            ))}
        </div>
    )
}

export default Courses