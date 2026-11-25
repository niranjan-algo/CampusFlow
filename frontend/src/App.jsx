import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/login'
import Resource from './pages/resource'
import Dashboard from './pages/dashboard'
import Booking from './pages/bookingPage'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/resource" element={<Resource/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
