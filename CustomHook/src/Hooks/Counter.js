import { useState } from "react"

export function useCounter(){

  const [count, setCount] = useState(0)

  function Increase(){
    setCount(count+1)
  }

  function Decrease(){
    setCount(count+-1)
  }

  return {
    count:count,
    Increase:Increase,
    Decrease:Decrease
  }

}