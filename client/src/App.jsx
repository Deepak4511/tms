
import './App.css'
import Login from './pages/login'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>

    <div className="">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    </div>
  )
}

export default App
