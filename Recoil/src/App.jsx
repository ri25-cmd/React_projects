import {RecoilRoot, selector, useRecoilValue, useSetRecoilState} from 'recoil';
import { counter, evenSelector } from './store/atoms/Counter';

function App() {

  return(
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter(){
  return(
    <>
    <CurrentCount/>
    <Increase/>
    <Decrease/>
    <IsEven/>
    </>
  )
}

const CurrentCount = () => {
  const count = useRecoilValue(counter);

  return (
    <>
    {count}
    </>
  )
}

const Increase = () =>{

  const setCount = useSetRecoilState(counter);

  const Inc = () =>{
    setCount(c => c+1)
  }
  return(
    <>
    <button onClick={Inc}>Increase</button>
    </>
  )
}

const Decrease = () => {

  const setCount = useSetRecoilState(counter);
  const Dec =()=>{
    setCount(c =>c-1)
  }
  return(
    <>
    <button onClick={Dec}>Decrease</button>
    </>
  )
}

const IsEven = ()=>{
  const even = useRecoilValue(evenSelector);
  return(
    <>
    {even ? "Even":"odd"}
    </>
  )
}
export default App
