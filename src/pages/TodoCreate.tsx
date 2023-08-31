import { useEffect, useState } from 'react'
import '../App.css'
import TodoList from './TodoList'
import { useLocation } from 'react-router-dom'
import { TodoListType } from '../App'

function TodoCreate() {
  const [todoInput, setTodoInput] = useState<TodoListType>({} as TodoListType)
  const { state } = useLocation()

  useEffect(() => {
    setTodoInput(state)
  }, [state])

  return (
    <div className='todo-list'>
      <h1>{todoInput.name}</h1>
      <TodoList />
    </div>
  )
}

export default TodoCreate
