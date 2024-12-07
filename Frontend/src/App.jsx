
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  
  const isFarmerLoggedin = true;
  const isUserLoggedin = true;
  const isWholesalerLoggedin = true;

  return (
    <>
        <Navbar/>
       
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    
        <Footer/>

    </>
  )
}

export default App
