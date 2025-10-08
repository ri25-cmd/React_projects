import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "Study",
    description: "Study from 9-5",
    done:false
  }])

  function AddTodo(){
    let newArr = [];
    for(let i=0; i <todos.length; i++){
      newArr.push(todos[i]);
    }
    newArr.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      done:false
    })

    setTodos(newArr);
  }

  return (
   <div>
    <input id='title' type='text' placeholder='title'></input>
    <input id='description' type='text' placeholder='description'></input>
    <br></br>
    <button onClick={AddTodo}>
      Add Todo
    </button>
    <br></br>
     
    {todos.map((todo)=> (
      <Todo
      title={todo.title}
      description={todo.description}
      done={todo.done}
      />
    ))}
   
   </div>
  )
}

function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.done ? "task is done": "Task is incomplete"}</h3>
    </div>
  )
}


export default App
