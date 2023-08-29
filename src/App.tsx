import { Link } from 'react-router-dom'
import './App.css'
import TodoIcon from './assets/todo'
import { useState } from 'react'

function App() {
  const [todoInput, setTodoInput] = useState<string>('')
  return (
    <main className='main-page'>
      <TodoIcon />
      <div>
        <h1>TODO App</h1>
        <h3>Aqui você pode criar suas tarefas da sua forma</h3>
        <form className='form-create'>
          <label htmlFor='todoInput'>Nome da Lista</label>
          <input
            id='todoInput'
            value={todoInput}
            autoFocus
            onChange={e => setTodoInput(e.target.value)}
            type='text'
            placeholder='Insira o nome de sua Todo List'
          />
          <Link to='edit/1'>Criar Lista</Link>
        </form>
        {/* <Link to='todos/create'>Nova tarefa</Link> */}
      </div>
    </main>
  )
}

export default App
