import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const student: Student = {
    firstname: "Anton",
    lastname: "Meier",
    age: 17,
    grades: ["A", 4, undefined, 1, 3,2,1,2],
  };
  const students:Student[] = [
    {
      firstname: "Anton",
      lastname: "Meier",
      age: 16,
      grades: [1, "4", 3, "1", "A", undefined, "*", 1, 2],
    },
    {
      firstname: "Berta",
      lastname: "Müller",
      age: 17,
      grades: ["A", undefined, 1],
    },
    {
      firstname: "Cäsar",
      lastname: "Schmidt",
      age: 17,
      grades: ["A", 1, undefined,3,2,4,5],
    },

  ];
  function outputStudent(student:Student) {

  console.log(`${student.firstname} ${student.lastname} (${student.age})`);
  console.log("=".repeat(30));
  console.log("Grades: ",student.grades
      .map(grade =>(grade===undefined ? '*' : grade))
      .join(","));
  }
  outputStudent(student);
  students.forEach(student=>outputStudent(student));
  return (
    <>

    </>
  )
}

export default App
