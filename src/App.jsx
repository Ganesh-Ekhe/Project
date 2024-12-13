import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Profile from "./pages/Profile"

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}>Home</Route>
    <Route path="/Sign-in" element={<Signin/>}></Route>
    <Route path="/Sign-up" element={<SignUp/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/Profile" element={<Profile/>}></Route>

  </Routes>
  </BrowserRouter>
  
}
