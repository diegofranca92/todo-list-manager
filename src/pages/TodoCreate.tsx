import { useEffect, useState } from 'react'
import '../App.css'
import TodoList from './TodoList'
import { useParams } from 'react-router-dom'

function TodoCreate() {
  const [todoInput, setTodoInput] = useState<string>('Teste nome da Lista')
  // const params = useParams()

  // useEffect(() => {
  //   setTodoInput(params)
  // }, [params])

  return (
    <>
      <h1>{todoInput}</h1>
      <TodoList />
    </>
  )
}

export default TodoCreate
