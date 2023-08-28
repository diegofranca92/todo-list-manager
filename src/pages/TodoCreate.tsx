import { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function TodoCreate() {
  const [todoInput, setTodoInput] = useState<string>('')

  return (
    <form>
      <label htmlFor="todoInput">Nome da Lista</label>
      <input id='todoInput' value={todoInput} onChange={e => setTodoInput(e.target.value)} type="text" placeholder='Insira o nome de sua Todo List' />
      <Link to='edit/1'>Nova Lista</Link>
    </form>
  )
}

export default TodoCreate