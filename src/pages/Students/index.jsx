import { useHistory } from "react-router-dom"
import { StudentCard } from "../../components/StudentCard"

export const Students = ({students}) =>{

    const history = useHistory()

    return(
        <ul>
            <h1>Devs</h1>
            {students && students.map(student=><StudentCard key={student.id} student={student}/>)}
            <button onClick={()=>history.push("/")}>Voltar para página de registro</button>

        </ul>
    )
}