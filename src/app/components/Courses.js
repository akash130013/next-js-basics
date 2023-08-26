import React from 'react'


// const fetchCourses =async () =>{
//     const response = await fetch(`http://localhost:3000/api/courses`,{
//        next:{
//            revalidate:60
//        }
//     });
//     return await response.json();
// }

 function Courses({data}) {

// const {data} = await fetchCourses()
// console.log({data});
  return (
    <div className='courses'>
        {
            data.courses && data.courses.map((course) => {
                return  (<div className='card' key={course.id}>
                         <h3>{course.title}- {course.instructor}</h3>
                         <h5>{course.duration}- {course.level}</h5>
                         <p>{course.description}</p>
                </div>)
            })
        }
       <h1>This is a server components</h1>
    </div>
  )
}

export default Courses