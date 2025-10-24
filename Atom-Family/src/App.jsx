import { todosAtomFamily } from "./atom"
import {RecoilRoot, useRecoilValue} from 'recoil';

function App() {

  return (
    <>
     <RecoilRoot>
      <Todo id={1}/>
      <br></br>
      <br></br>
      <Todo id={2}/>
     </RecoilRoot>
    </>
  )
}

function Todo({id}) {
  const currentTodo = useRecoilValue(todosAtomFamily(id))
  return(
    <>
    {currentTodo.title}
    <br></br>
    {currentTodo.description}
    </>
  )
}

export default App
