import React,{useState} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Card from './components/Card'
const App = () => {
    let [cart,setCart] = useState([])
  return (
   <BrowserRouter>
    <Navbar cart={cart} setCart={setCart}/>
    <Routes>
      <Route path='/' element={<Home cart={cart} setCart = {setCart}/>}/>
      <Route path = '/About' element={<About/>}/>
      <Route path = '/Contact' element = {<Contact/>}/>
      <Route path ='/Card' element ={<Card/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter> 
  )
}
export default App
