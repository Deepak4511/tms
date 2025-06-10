
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/login'
import { Routes, Route, Navigate } from 'react-router-dom'
import Task from './pages/Task'

function App() {

  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout/>}>
          <Route path="/" element={<Navigate to="/dashboard"/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/tasks' element={<Task/>}/>
          <Route path='/completed/:status' element={<Task/>}/>
          <Route path='/in-progress/:status' element={<Task/>}/>
          <Route path='/tasks >' element={<Task/>}/>
          
        </Route>
      </Routes>
    </main>
  )
}

export default App
