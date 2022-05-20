import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/klassPortal" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path='/details/:title/:id' element={<Details products={products} />} /> */}
      </Routes>
      <Dashboard />
      <Footer />
    </BrowserRouter>
  )
}

export default App
