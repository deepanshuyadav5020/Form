import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"

import Login from "./pages/Login"
import Signup from "./pages/Signup"



function App() {


  

  return (
    
      <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>

    
    )
}

export default App;
