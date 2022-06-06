import { Link, useParams } from "react-router-dom"

export const Student = ({students}) =>{
    const params = useParams()
    const student = students.find(student=> student.id == params.id)
    console.log(student)
    return(
        <div>
            <h1>{student.name}</h1>
            <p>Módulo: {student.module}</p>        
            <p>Atividade: {student.activity}</p>
            <p>Impedimentos: {student.obstruction.toString()}</p>
            <Link to ="/students">Voltar</Link>
        </div>
    )
}