import './App.css'
import { Routes, Route } from 'react-router-dom'

import NavMenu from './components/navMenu/NavMenu.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'

function App() {
  

  return (
    <div className='main-con'>
      <NavMenu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/landmark' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App

