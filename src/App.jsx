import { useContext, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'
import Passwords from './Components/Passwords'
import { urlContext,userContext,passContext,passListContext } from './Context/context'

function App() {

  const Footer = ()=> {
    return <footer>
      <li><span>

      <span  className='green'>&lt;</span><span style={{color:'white'}}>Password</span><span  className='green'>Manager/&gt;</span>
      </span>
      </li>
      <span  style={{color:'white'}}>created by Anil</span>
    </footer>
  }

  return (
    <>
    <Navbar/>
    <Manager/>
    <Footer/>
    </>
  )
}

export default App
