import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './TodoList'

function App() {
  const [todoInput, setTodoInput] = useState<string>('')
  const [todoList, setTodoList] = useState<any[]>([])

  useEffect(() => {
    let inicialList = [
      {
        id: 'fdsfsd',
        text: 'Todo 1',
        done: false
      },
      {
        id: 'fdgdg',
        text: 'Todo 2',
        done: false
      }
    ] as never
    setTodoList(inicialList)
  }, [])

  return (
    <main>
      <TodoList />
    </main>
  )
}

export default App
