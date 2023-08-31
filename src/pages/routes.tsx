import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import TodoCreate from './TodoCreate'
import App from '../App'


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/edit/:todoId' element={<TodoCreate />} />
      </Routes>
    </Router>
  )
}
