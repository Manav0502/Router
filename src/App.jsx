import Navbar from './NavBar/Navbar'
import Dashboard from './NavBar/Dashboard'
import Home from './NavBar/Home'
import Login from './NavBar/Login'
import SignUp from './NavBar/SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'


function App() {

  const router = createBrowserRouter([
  {path: "/", element: <Dashboard />},
  {path: "/home", element: <Home />},
  {path: "/login", element: <Login />},
  {path: "/signup", element: <SignUp />}
])

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
