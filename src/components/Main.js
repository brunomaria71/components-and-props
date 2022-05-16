import React from "react";
import Greet from "./Greet";

const students = [
    {id: 1, firstName: 'Wade', lastName: 'Booth'},
    {id: 2, firstName: 'Alex', lastName: 'Hall'},
    {id: 3, firstName: 'Maria', lastName: 'Bruno'},
    {id: 4, firstName: 'Arthur', lastName: 'Silva'},
    {id: 5, firstName: 'Chole'},
]

function Main() {

    return (
        <main>
        {students.map(student => {
            return <Greet 
            key={student.id} 
            firstName={student.firstName} 
            lastName={student.lastName}/> 
        })}
        </main>
    )
}





export default Main;