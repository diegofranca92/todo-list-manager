import { useCallback, useEffect, useState } from 'react'
import '../App.css'
import TodoList from './TodoList'
import { useLocation } from 'react-router-dom'
import { TodoListType } from '../App'

function TodoCreate() {
  const [todoInput, setTodoInput] = useState<TodoListType>({} as TodoListType)
  const { state } = useLocation()

  const shareTodo = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert(
        `Link da lista copiada com sucesso, agora só colar para compartilhar: ${window.location.href}`
      )
    } catch {
      alert('Falha ao copiar o link da lista')
    }
  }, [])

  useEffect(() => {
    setTodoInput(state)
  }, [state])

  return (
    <div className='todo-list'>
      <h1>
        {todoInput.name}{' '}
        <button onClick={shareTodo} className='share-btn' title='Compartilhar'>
          🌐 Compartilhar lista
        </button>
      </h1>
      <TodoList />
    </div>
  )
}

export default TodoCreate
