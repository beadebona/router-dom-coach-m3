import { Link } from "react-router-dom"

export const StudentCard = ({student}) =>{
    return (
        <li>
        <h1>{student.name}</h1>
        <p>Módulo: {student.module}</p>
        <Link to={`/student/${student.id}`}>Ver perfil</Link>
        </li>
    )
}