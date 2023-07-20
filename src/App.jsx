import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Pages/Home/Home"
import Marketplace from "./Components/Pages/Marketplace/Marketplace"
import Contacto from "./Components/Pages/Contacto/Contacto"
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
          <Route path="/Aventura" element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
