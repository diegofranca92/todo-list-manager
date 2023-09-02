import { useNavigate } from 'react-router-dom'
import './App.css'
import TodoIcon from './assets/todo'
import { useState } from 'react'

export interface TodoItemType {
  id: number
  item: string
  order?: number
}
export interface TodoListType {
  id: string
  name: string
  permalink: string
  itens?: TodoItemType[]
}

function App() {
  const [todoInput, setTodoInput] = useState<string>('')
  const navigate = useNavigate()

  function handleCreateList() {
    const id = Math.random().toString(16).slice(2)
    const todoData: TodoListType = {
      id,
      name: todoInput,
      permalink: `/list/${todoInput.toLowerCase().split(' ').join('-')}`,
      itens: []
    }
    navigate(`edit/${id}`, { state: todoData })
  }

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
          <button onClick={handleCreateList}>Criar Lista</button>
        </form>
      </div>
    </main>
  )
}

export default App
