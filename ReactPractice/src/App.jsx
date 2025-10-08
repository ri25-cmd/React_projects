import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counterVisible, setCounterVisible] = useState(true);
  const [count, setCount] = useState(0); 
  //conditional renderimg 

  useEffect(() => {
      const toggleInterval = setInterval(() => {
        setCounterVisible(c => !c);
      }, 5000);
      console.log("mounted!");

      return () => {
        console.log("UNMOUNTED!");
        clearInterval(toggleInterval);
      };
 }, []);
  return (
   <div>
    {counterVisible && <Counter count={count} setCount={setCount} />}

  </div>
  )
}

function Counter(props){

  console.log("counter");
  useEffect(() => {

      const clock = setInterval(() => {
        props.setCount(c => c +1 );
      }, 1000);

      console.log("mounted!");

      return () => {
        console.log("UNMOUNTED!");
        clearInterval(clock);
      };
 }, []);

  const IncreaseCount = () => {
    props.setCount(c+1);
  }

  const DecreaseCount = () => {
    props.setCount(c-1);
  }

  const SquareCount = () => {
    props.setCount(c*c);
  }

  const ResetCount = () => {
    props.setCount(0);
  }

 //HOOKING INTO THE LIFECYCLE(mounting, re-rendering, unmounting) EVENTS OF REACT::::::  i.e., the setInterval should run only on the first render
 // of the counter component and for that we use useEffect hook  => It takes to arguments that are 1.) Function and 2.)Dependency Array 

 // guards our setInterval from re-render
 


  return(
    <div>
      <h1>{props.count}</h1>
      <button onClick={IncreaseCount}>INCREMENT</button>
      <button onClick={DecreaseCount}>DECREASE</button>
      <button onClick={SquareCount}>SQUARE</button>
      <button onClick={ResetCount}>RESET</button>
    </div>
  )
}

export default App
