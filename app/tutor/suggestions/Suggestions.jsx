'use client'

import { useState, useEffect } from "react";
import { FaRobot } from "react-icons/fa6";

const courses = [
    { title: "Full-Stack Web Development", description: "Learn to build complete web applications using HTML, CSS, JavaScript, and backend technologies." },
    { title: "Data Science with Python", description: "Explore data analysis, visualization, and machine learning using Python." },
    { title: "Introduction to Machine Learning", description: "Understand the fundamentals of machine learning and how to implement algorithms." },
    { title: "Mobile App Development with React Native", description: "Create cross-platform mobile applications using React Native." },
    { title: "Cloud Computing Basics", description: "Learn about cloud services, deployment models, and cloud architecture." },
    { title: "Cybersecurity Fundamentals", description: "Understand the basics of cybersecurity, threats, and defenses." },
    { title: "Game Development with Unity", description: "Build interactive games using the Unity game engine." },
    { title: "Blockchain and Cryptocurrency", description: "Explore the principles of blockchain technology and its applications." },
    { title: "DevOps Practices", description: "Learn about CI/CD, containerization, and infrastructure as code." },
    { title: "User Experience (UX) Design", description: "Understand the principles of UX design and how to create user-centered products." },
    { title: "Artificial Intelligence Basics", description: "Get introduced to AI concepts, applications, and ethical considerations." },
    { title: "Web Accessibility", description: "Learn how to create accessible web applications for all users." },
    { title: "Digital Marketing Strategies", description: "Explore effective digital marketing techniques and tools." },
    { title: "Introduction to React", description: "Learn the basics of building user interfaces with React." },
    { title: "Data Visualization with D3.js", description: "Create dynamic and interactive data visualizations using D3.js." },
    { title: "Introduction to SQL", description: "Learn how to manage and query databases using SQL." },
    { title: "Internet of Things (IoT)", description: "Understand IoT concepts and how to build IoT applications." },
    { title: "Software Testing and Quality Assurance", description: "Learn about testing methodologies and best practices." },
    { title: "Introduction to Agile Methodologies", description: "Explore Agile principles and practices for software development." },
    { title: "Python for Data Analysis", description: "Use Python libraries like Pandas and NumPy for data analysis." },
    { title: "Introduction to Virtual Reality", description: "Learn the basics of VR development and design." },
  ];
  
function Suggestions() {
    const [selectedCourses, setSelectedCourses] = useState([]);

    useEffect(() => {
      const getRandomCourses = () => {
        const shuffledCourses = courses.sort(() => 0.5 - Math.random()); 
        return shuffledCourses.slice(0, 3); 
      };
      setSelectedCourses(getRandomCourses());
    }, []);
  return (
   <ul className="w-3/4 flex flex-col gap-3 h-[260px] overflow-auto">
    {selectedCourses?.map((course)=>(
        <li key={course.title} className="flex gap-2 items-center bg-blue-50 rounded-xl p-3">
          <span className="size-10 flex-shrink-0 bg-blue-50 rounded-lg grid place-content-center">
            <FaRobot fill="grey" size={24}/>
          </span>
          <span>
            <span className="font-semibold text-[15px]">{course.title}</span>
            <span className="text-[13px] tracking-wide text-[#818997] block leading-none">{course.description}</span>
          </span>
        </li>
    ))}
    </ul>
  )
}

export default Suggestions