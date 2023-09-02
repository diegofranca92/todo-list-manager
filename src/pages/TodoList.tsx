import { useEffect, useRef, useState } from 'react'
import '../App.css'
import { TodoItemType } from '../App'

function TodoList() {
  const [todoInput, setTodoInput] = useState<string>('')
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const inputTodo = useRef<any>(null) 
  const [todoList, setTodoList] = useState<TodoItemType[]>([])
  
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
  function addTodo(e:any) {
    e.preventDefault()
    console.log('todoList ANTES', todoList);
    
    

    setTodoList(value => {

      const newTodoItem = {
        id: todoList.length + 1,
        item: todoInput,
        order: todoList.length,
        isDone: false
      }
      console.log(value);
      return [
        ...value,
        newTodoItem
      ]
      
    })

    
    setTodoInput('')    
    inputTodo.current.focus()
  }

  function editTodo(todoItem:TodoItemType) {
    setTodoInput(todoItem.item)
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
      <form onSubmit={addTodo} className='input-box'>
        <input
          ref={inputTodo}
          type='search'
          placeholder='Cria uma tarefa'
          value={todoInput}
          onChange={e => setTodoInput(e.target.value)}
          autoFocus
        />
        <button disabled={!todoInput.length} type='submit'>
          Nova tarefa
        </button>
      </form>
      <ul className='todo-items-list'>
        {todoList.map(todoItem => (
          <li className='todo-item' key={todoItem.id}>
            <input id={todoItem.id.toString()} value={todoItem.item} type='checkbox' />
            <label htmlFor={todoItem.id.toString()}>{todoItem.item}</label>
            <button
              title='Editar'
              className='btn-actions'
              onClick={() => editTodo(todoItem)}>
              ✏️
            </button>
            <button
              title='Remover'
              className='btn-actions'
              onClick={() => removeTodo(todoItem.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default TodoList
