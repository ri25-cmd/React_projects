import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const Increase = () =>{
    setCount(count => count +1);
  }

  const Decrease = () => {
    setCount2(count => count -1);
  }

  return (
   <div>
    Hi there
    <Counter count={count} count2={count2}/>
    <button onClick={Increase}>Increase Count</button>
    <button onClick={Decrease}>Decrease Count</button>
   </div>
  )
}

function Counter(props){

  useEffect(() => {
    console.log("mount!");

    return function(){
      console.log("Unmount!")
    }
  },[])


  useEffect(() => {

    console.log("Count has Changed");

    return function(){
      console.log("CleanUp inside the effect!")
    }
  }, [props.count, props.count2])

  return(
    <div>
      <h1>{props.count}</h1>
      <h1>{props.count2}</h1>
    </div>
  )
}

export default App
