import { Link } from 'react-router-dom'
import './App.css'
import TodoIcon from './assets/todo'

function App() {

  return (
    <main className='main-page'>
      <TodoIcon />
      <div>
        <h1>TODO App</h1>
        <h3>Aqui você pode criar suas tarefas da sua forma</h3>
        <Link to='todos/create'>Nova tarefa</Link>
      </div>
      
    </main>
  )
}

export default App
