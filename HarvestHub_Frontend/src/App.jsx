
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SideBar from './Components/Sidebar';
import Footer from './Components/Footer';
import { Router } from 'react-router-dom';
function App() {
  
  const isFarmerLoggedin = true;
  const isUserLoggedin = true;
  const isWholesalerLoggedin = true;

  return (
    <>
        <Navbar/>
        <SideBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    
        <Footer/>

    </>
  )
}

export default App
