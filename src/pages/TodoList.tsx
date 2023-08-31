import { useEffect, useRef, useState } from 'react'
import '../App.css'
import { TodoItemType } from '../App'

function TodoList() {
  const [todoInput, setTodoInput] = useState<string>('')
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const inputTodo = useRef<any>(null) 
  const [todoList, setTodoList] = useState<TodoItemType[]>([])

  function addTodo() {
    setTodoList(value => {
      let order = value.findIndex(todo => todo)
      return [
        ...value,
        {
          id: todoList.length + 1,
          item: todoInput,
          order,
          isDone: false
        }
      ]
    })
    setTodoInput('')
    inputTodo.current.focus()
  }

  function removeTodo(id: number) {
    const newList = todoList.filter(todoItem => todoItem.id !== id)
    setTodoList(newList)
    setTodoInput('')
  }

  useEffect(() => {
    const inicialList: TodoItemType[] = []
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
            <input id={todoItem.id.toString()} value={todoItem.item} type='checkbox' />
            <label htmlFor={todoItem.id.toString()}>{todoItem.item}</label>
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
