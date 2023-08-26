import { useEffect, useState } from 'react'
import './App.css'

function TodoList() {
  const [todoInput, setTodoInput] = useState<string>('')
  const [todoList, setTodoList] = useState<{
    id: string
    text: string
    isDone: boolean
  }[]>([])

  function addTodo() {
    setTodoList(value => {
      return [...value, {
        id: Math.random().toString(),
        text: todoInput,
        isDone: false,
      }]
    })
    setTodoInput('')
  }

  useEffect(() => {
    let inicialList = [
      {
        id: 'fdsfsd',
        text: 'Todo 1',
        isDone: false
      },
      {
        id: 'fdgdg',
        text: 'Todo 2',
        isDone: false
      }
    ] as never
    setTodoList(inicialList)
  }, [])

  return (
    <main>
      <div className='input-box'>
        <input
          type='search'
          placeholder='Cria uma tarefa'
          value={todoInput}
          onChange={e => setTodoInput(e.target.value)}
          autoFocus
        />
        <button disabled={!todoInput.length} onClick={addTodo}>Nova tarefa</button>
      </div>
      <ul>
        {todoList.map(todoItem => (
          <li className='todo-item' key={todoItem.id}>
            <input id={todoItem.id} value={todoItem.text} type='checkbox' />
            <label htmlFor={todoItem.id}>{todoItem.text}</label>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default TodoList
