import { memo } from "react";
import { useEffect } from "react";
import { useState } from "react"


function App() {

  return (
    <>
     <Counter/>
    </>
  )
}

function Counter(){
   const [count, setCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount(count=> count+1)
    }, 3000)
  }, [])

  return(
    <>
    <Currentcount/>
    <Increase/>
    <Decrease/>
    </>
  )
}

const Currentcount = memo(()=>{

  return(
    <>1</>
  )
})

const Increase = memo (()=>{
   console.log("Increase rendered");

  return(
    <>
    <div>
      <button>Increase</button>
    </div>
   
    </>
  )
})
const Decrease = memo(()=>{
  return(
    <>
    <div>
      <button>Decrease</button>
    </div>
    </>
  )
})

export default App
