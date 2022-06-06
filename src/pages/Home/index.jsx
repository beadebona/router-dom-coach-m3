
export const Home =({ coach,setCoach, setAuth})=>{

    const handleCoach = ()=>{
        localStorage.setItem("@routerAuth", true)
        localStorage.setItem("@routerCoach", coach) 
        setAuth(true)
    }

    return(
        <div className="App">
            <h1>Daily</h1>
          <input placeholder="name" value={coach} onChange={(evt)=>setCoach(evt.target.value)}/>
          <button onClick={handleCoach}>Entrar</button>
      </div>
    )
}