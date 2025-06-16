
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/login'
import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom'
import Task from './pages/Task'
import TaskDetails from './pages/TaskDetails'
import Trash from './pages/Trash'
import Users from './pages/Users'
import Sidebar from './components/common/Sidebar'
import Navbar from './components/common/Navbar'



function Layout(){
  const user="test"

  const location = useLocation()

  return user ? (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
    <Sidebar/>
      </div>
      {/* <MobileSidebar/> */}
      <div className='flex-1 overflow-y-auto'>
      <Navbar/>
        <div className='p-4 2xl:px-10'>
          <Outlet/>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" state={{ from : location }}/>
  )

}

function App() {

  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
      <Routes>
      
        <Route path='/login' element={<Login/>}/>
        <Route element={<Layout/>}>
          <Route index path="/" element={<Navigate to="/dashboard"/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/tasks' element={<Task/>}/>
          <Route path='/completed/:status?' element={<Task/>}/>
          <Route path='/in-progress/:status?' element={<Task/>}/>
          <Route path='/todo/:status?' element={<Task/>}/>
          <Route path='trashed' element={<Trash/>}/>
          <Route path='/tasks/:id' element={<TaskDetails/>}/>
          <Route path='/team'  element={<Users/>}/>
          <Route path='/status'/>
          
        </Route>
        
      </Routes>
    </main>
  )
}

export default App
