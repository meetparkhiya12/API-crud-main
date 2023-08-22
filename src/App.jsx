import { Route, Routes } from "react-router"
import Header from "./Componets/Header/Header.jsx"

import Home from "./Componets/Home/Home.jsx"
import Student from "./Componets/Student/Student.jsx"
import ViewStudent from "./Componets/ViewStudent/viewcart.jsx"





function App() {


  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/student" element={<Student />}></Route>
      <Route path="/view" element={<ViewStudent/>}></Route>
    </Routes>
     </>
     
  )
}

export default App
