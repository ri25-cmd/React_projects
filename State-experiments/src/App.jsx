import { createContext, useContext } from "react"
import { useState } from "react"

const BulbContext = createContext();


function BulbProvider({children}){
  const [bulbon, setBulbon] = useState(true)
  return(
    <>
      <BulbContext.Provider value={{
          bulbon:bulbon,
          setBulbon:setBulbon
        }}>
        {children}
      </BulbContext.Provider>
    </>
  )
}

function App() {

  

  return (
    <>
    <div>
      <BulbProvider>
        <Lightbulb/>
      </BulbProvider>
    </div>
    </>
  )
}

function Lightbulb() {
  
  return(
    <>
    <div>
      <Bulbstate />
      <Togglebulbstate />
    </div>
    </>
  )
}

function Bulbstate(){

  const {bulbon} = useContext(BulbContext);

  const bulbonsrc="—Pngtree—flat design illustration a bright_20939428.png" ;
  const bulboffsrc="—Pngtree—bulb icon white color light_7885543.png";
  return(
    <>
    <div>
      <img src={bulbon ? bulbonsrc : bulboffsrc} style={{height:100, width:100}}/>

    </div>
    </>
  )
}
function Togglebulbstate(){
    const {bulbon, setBulbon} = useContext(BulbContext);

  function toggle(){
    setBulbon(!bulbon)
  }

  return(
    <>
    <div>
      <button onClick={toggle}>Toggle bulb!</button>
    </div>
    </>
  )
}

export default App
