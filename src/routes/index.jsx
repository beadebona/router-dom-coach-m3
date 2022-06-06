import { useState } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { Home } from "../pages/Home"
import { Register } from "../pages/Register"
import { Student } from "../pages/Student"
import { Students } from "../pages/Students"

export const Routes = () =>{
    const [students, setStudents] = useState([])
    const [auth, setAuth] = useState(localStorage.getItem("@routerAuth") || false)
    const [coach, setCoach] = useState(localStorage.getItem("@routerCoach") || "")
    
    return (
        <Switch>
            <Route exact path="/">
                {auth ? <Redirect to="/register" /> : <Home coach={coach} setCoach={setCoach} setAuth={setAuth}/>}
            </Route>
            <Route path="/students">
                <Students students={students} auth={auth}/>
            </Route>
            <Route path="/student/:id" >
                <Student students={students}/>
            </Route>
            <Route path="/register">
            {auth ? <Register coach={coach} setAuth={setAuth} setStudents={setStudents} students={students}/> : <Redirect to="/"/> }
                
            </Route>
        </Switch>
    )
}