"use client"
import styles from './page.module.css'
import { useState, useEffect } from 'react'
import LoadingPage from './loading'
import Courses from './components/Courses';


export default function Home() {

  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  const fetchCourses = async() =>{
    console.log("step2");
    try {
         const response = await fetch('http://localhost:3000/api/courses');
         const data = await response.json();
          setCourses(data);
          setLoading(false);
     } catch (error) {
       console.log("Something went wrong !!");
       setLoading(false);
     }
   }

  useEffect(()=>{
    console.log("use effct called");
    fetchCourses();
  }, [])

  if(loading){
    return <LoadingPage />
  }
console.log({courses});
  return (
    <main className={styles.main}>
       <h1>Welcome to codebystupid</h1>
       <Courses data= {courses} />
    </main>
  )
}
