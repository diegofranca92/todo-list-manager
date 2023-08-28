import { useEffect, useRef, useState } from 'react'
import '../App.css'

function TodoList() {
  const [todoInput, setTodoInput] = useState<string>('')
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const inputTodo = useRef<any>(null) 
  const [todoList, setTodoList] = useState<
    {
      id: string
      text: string
      isDone: boolean
    }[]
  >([])

  function addTodo() {
    setTodoList(value => {
      return [
        ...value,
        {
          id: Math.random().toString(),
          text: todoInput,
          isDone: false
        }
      ]
    })
    setTodoInput('')
    inputTodo.current.focus()
  }

  function removeTodo(id: string) {
    const newList = todoList.filter(todoItem => todoItem.id !== id)
    setTodoList(newList)
    setTodoInput('')
  }

  useEffect(() => {
    const inicialList = [
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
          ref={inputTodo}
          type='search'
          placeholder='Cria uma tarefa'
          value={todoInput}
          onChange={e => setTodoInput(e.target.value)}
          autoFocus
        />
        <button disabled={!todoInput.length} onClick={addTodo}>
          Nova tarefa
        </button>
      </div>
      <ul>
        {todoList.map(todoItem => (
          <li className='todo-item' key={todoItem.id}>
            <input id={todoItem.id} value={todoItem.text} type='checkbox' />
            <label htmlFor={todoItem.id}>{todoItem.text}</label>
            <button
              className='btn-remove'
              onClick={() => removeTodo(todoItem.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default TodoList
