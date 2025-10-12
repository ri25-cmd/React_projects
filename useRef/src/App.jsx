import { useRef, useState } from "react"

//useRef
//refrence to a value, such that when you change the value, the component doesn't re-render

function App() {
  const[currTime, setcurrTime]= useState(0);
  const inputref= useRef();
  const timer = useRef();

  //we assign value to a variable in 3 ways:::
  //1) let num = 1 => this is the rearest way in which we assign the values
  //we use either of th e below 2 to assign the value
 // const [value, setValue] = useState(1);
  //or
 //  const valRef = useRef()

  const Applyref = () =>{
    inputref.current.focus();
  }

  const Startclock = () =>{
 
    const value = setInterval(() => {
      setcurrTime(c => c+1);
    }, 1000)
    timer.current = value;
  }

  const Stopclock =() =>{
  
    clearInterval(timer.current)
  }

  return (
    <>
      <input ref={inputref} type="text"></input>
      <button onClick={Applyref}>Add text</button>
      <div style={{padding:10, margin:10}}>
        {currTime}
        <br></br>
        <button onClick={Startclock}>Start</button>
        <button onClick={Stopclock}>Stop</button>
      </div>
    </>
  )
}

export default App
