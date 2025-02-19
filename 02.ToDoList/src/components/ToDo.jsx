import { useState  } from "react"
import '../style.css'; 
const ToDo = () => {

    const [todos , setTodos] = useState([])
    const [input , setInput] = useState('') 
    const handleSubmit = () => { 
        setTodos((todos)=> {
        return todos.concat({
                text:input , 
                id: Math.floor(Math.random() * 10)
            })
        })
        setInput('')
    } 

    const removeToDo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
  return (
    <div className="container"> 
    <input type="text" placeholder="New ToDO "  value={input} onChange={(e) => setInput(e.target.value)} />
    <button onClick={handleSubmit} >Add</button>

    <ul className="todos-list">
        {todos.map((todo) => (
            <li className="todo" key={todo.id}>
                <span>{todo.text}</span>
                <button className="close" onClick={() => removeToDo(todo.id)}>x</button>
            </li>
        ))}
    </ul>
    </div>
  )
}

export default ToDo
