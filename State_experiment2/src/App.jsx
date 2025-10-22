import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react"

const CountContext = createContext();

function CountContextProvider ({children}){
  const [count , setCount ] = useState(0);

  return(
    <>
    <CountContext.Provider value={{
      count:count,
      setCount:setCount
    }}>
      {children}
    </CountContext.Provider>
    </>
  )
}

function App() {

  return(
    <>
    <Parent/>
    </>
  )
  
}

function Parent(){
  return(
    <>
    <CountContextProvider>
      <Increase/>
      <Decrease/>
      <Value/>
    </CountContextProvider>
    </>
  )
}

function Increase(){
  const {setCount} = useContext(CountContext);
   
  const Increase = () => {
    setCount(count => count+1)
  }
  return(
    <>
    <button onClick={Increase}>Increase</button>
    </>
  )
}

function Decrease(){
  const {setCount} = useContext(CountContext);
   
  const Decrease = () => {
    setCount(count => count-1)
  }
  return(
    <>
    <button onClick={Decrease}>Decrease</button>
    </>
  )
}

function Value(){
  const {count}= useContext(CountContext);
  return(
    <>
    <div>Value: {count}</div>
    </>
  )
}

export default App
