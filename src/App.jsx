import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Admin from "./Admin"
import User from "./User"
import Navbar from "./Navbar"


function App() {
  const userRoler={
    Registered:"registered",
    Public:"public",
    Admin:"admin",
  }
  const currentuser = userRoler.Public;

  return (
    <BrowserRouter>
    <Navbar currentuser={currentuser}/>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/admin" element={<Admin currentuser={currentuser}/>} ></Route>
      <Route path="/user" element={<User currentuser={currentuser}/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
