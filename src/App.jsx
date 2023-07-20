import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Pages/Home/Home"
import Marketplace from "./Components/Pages/Marketplace/Marketplace"
import Aventura from "./Components/Pages/AventuraMap/Aventura"
import ResponsiveAppBar from "./Components/NavBar/ResponsiveAppBar"
import Footer from "./Components/Footer/Footer"



function App() {

  return (
    <>
    <ResponsiveAppBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Marketplace" element={<Marketplace/>}/>
          <Route path="/Aventura" element={<Aventura/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
