
import { useEffect, useState } from "react";
import { useCounter } from "./Hooks/Counter";
import { useFetch, useFetch2 } from "./Hooks/UseFetch";
import { usePrev } from "./Hooks/UsePrev";
import { useRef } from "react";

function App() {
  return(
    <>
    <Counter/>
    <Fetching/>
    <Fetching2/>
    <PrevValue/>
    <Debouncing/>
    <Debounce/>
    </>
  )
 
}

function Counter(){

  const {count, Increase, Decrease} = useCounter();

  return(
    <>
    <button onClick={Increase}>Increase</button>
    <button onClick={Decrease}>Decrease</button>
    <div>{count}</div>
    </>
  )
}


function Fetching(){
  const {post} = useFetch();
  return(
    <>
    <div>
      {post.title}
    </div>
    </>
  )
}

function Fetching2(){
  const [count, setCount] = useState(1)
  const {finalData, loading} = useFetch2("https://jsonplaceholder.typicode.com/posts/" + count , 10);
  
  if(loading){
    return <div>
      loading...
    </div>
  }

  return(
    <>
    <div>
      <button onClick={() => setCount(1)}>1</button>
      <button onClick={() => setCount(2)}>2</button>
      <button onClick={() => setCount(3)}>3</button>
      <button onClick={() => setCount(4)}>4</button>
      <button onClick={() => setCount(5)}>5</button>
      
      {JSON.stringify(finalData.title)}
    </div>
    </>
  )
}

function PrevValue(){
  const [count, setCount] =useState(0)
  const prev = usePrev(count);

  return(
    <>
    <p>{count}</p>
    <button onClick={()=>{
      setCount(c => c+1)
    }}>Click Me!</button>
    <p>The prev Value: {prev}</p>
    </>
  )
}


function useDebunk(ogfn){
  const currClock = useRef();

  const fn = () =>{
    clearTimeout(currClock.current);
    currClock.current = setTimeout(ogfn, 1000)
  }

  return fn;
}

function Debouncing(){
  function sendDataToBackend(){
    fetch("api.amazon.com/search/")
  }

  const DebounceFn = useDebunk(sendDataToBackend)
  return(
    <>
    <input type="text" onChange={DebounceFn}></input>
    </>
  )
}

function useDebounce(value, delay){
  const [debounceVal, setDebounceVal]= useState(value);

  useEffect(()=>{
    const handle = setTimeout(()=>{
      setDebounceVal(value)
    },delay)

    return () => {
      clearTimeout(handle)
    }
  }, [value,delay])

  return debounceVal;
}

function Debounce(){
  const [inputVal, setInputVal] = useState('')
  const DebounceFn = useDebounce(inputVal, 2000)

  function Change(e){
    setInputVal(e.target.value);
  }

  useEffect(()=>{
    console.log("Expensive shittt")
  }, [DebounceFn])
  return(
    <>
    <input type="text" onChange={Change}></input>
    </>
  )
}

export default App
