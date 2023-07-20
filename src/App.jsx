import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Pages/Home/Home"
import Marketplace from "./Components/Pages/Marketplace/Marketplace"
import ResponsiveAppBar from "./Components/NavBar/ResponsiveAppBar"
import Footer from "./Components/Footer/Footer"
import PagePVP from './Components/Pages/PvP/PagePvP'
import Aventura from './Components/Pages/AventuraMap/Aventura'
import Wallet from "./Components/Pages/Wallet/wallet"



function App() {

  return (
    <>
    <ResponsiveAppBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/MARKETPLACE" element={<Marketplace/>}/>
          <Route path="/Aventura" element={<Aventura/>}/>
          <Route path="/PvP" element={<PagePVP/>}/>
          <Route path="/Connect Wallet" element={<Wallet/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
