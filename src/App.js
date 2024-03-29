import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Videos from './components/Videos'
import Upload from './components/Upload'
import Login from './components/Login'
import Signup from './components/Signup'
const App = () => {
   return (
    <Router>
    <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Videos' element={<Videos/>}/>
    <Route path='/Upload' element={<Upload/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
  </Routes>
   <Footer/>
    </Router>
     
   )
 }
 
 export default App