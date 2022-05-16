import React, {useState} from "react";
import Greet from "./Greet";

const students = [
    {id: 1, firstName: 'Wade', lastName: 'Booth'},
    {id: 2, firstName: 'Alex', lastName: 'Hall'},
    {id: 3, firstName: 'Maria', lastName: 'Bruno'},
    {id: 4, firstName: 'Arthur', lastName: 'Silva'},
    {id: 5, firstName: 'Chole'},
]

function Main() {
    const [studentList, setStudentList] = useState(students); // we cant modify studentlist, so we use state as kind of a new variable
    const handleClick = () => {
        //add rodrigo to list of students
        const rodrigo = { id: 6, firstName: 'Rodrigo'}
        setStudentList([...students, rodrigo])
        document.querySelector('button').style.display='none'
    
    }

    return (
        <main>
            <button onClick={handleClick}>Add Rodrigo</button>
        {studentList.map(student => {
            return <Greet 
            key={student.id} 
            firstName={student.firstName} 
            lastName={student.lastName}/> 
        })}
        </main>
    )
}





export default Main;