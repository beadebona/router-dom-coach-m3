import { useState } from "react"
import { Link } from "react-router-dom"

export const Register = ({setStudents, students, coach, setAuth, }) =>{
    const [name, setName] = useState("")
    const [module, setModule] = useState("")
    const [activity, setActivity] = useState("")
    const [obstruction, setObstruction] = useState(false)

    const student ={
        name,
        module,
        activity,
        obstruction,
        id: students.length +1
    }
    const handleLogOut = () =>{
      localStorage.setItem("@routerAuth", false) 
      setAuth(false)
    }

    return(
        <div className="App">
          <h1>Olá, {coach}</h1>
        <form onSubmit={evt=>evt.preventDefault()}>
          <input placeholder="name" onChange={(evt)=>setName(evt.target.value)}/>
          <input placeholder="módulo" onChange={(evt)=>setModule(evt.target.value)}/>
          <input placeholder="atividade" onChange={(evt)=>setActivity(evt.target.value)}/>
          <input type="checkbox" onChange={()=>setObstruction(!obstruction)} />
          <label> Impedimentos</label>
          <button onClick={()=>setStudents([...students, student])}>Enviar</button>
        </form>
        <Link to={`/students`}>Ver Lista completa de alunos</Link>
        <ul>
          {students.map(st=><li key={st.id} className={st.obstruction.toString()}>{st.name}</li>)}
        </ul>
        <button onClick={handleLogOut}>Sair</button>

      </div>
    )
}