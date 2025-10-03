// src/App.jsx

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Pagas/Home/Home'
import Product from './Pagas/product/product'
import ConatctUs from './Pagas/contactUs/ConatctUs'
import Footer from './components/Footer/Footer'
import Search from './Pagas/Search/Search'
import CoponPrinter from './Pagas/CoponPrinter/CoponPrinter'
import ScrollToTop from './Hooks/ScrollToTop'
import NotFoundPage from './NotFound/NotFoundPage'

function App() {

  return (
    <>
     <Navbar/>
     <ScrollToTop />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/ConatctUs' element={<ConatctUs />}/>
      <Route path='/Search/:code' element={<Search />}/>
      <Route path='/CoponsPrinter/:code' element={<CoponPrinter />}/>



      <Route path="*" element={<NotFoundPage />} /> 
     </Routes>
      <CouponCard/>
      <Footer/>
      
    </>

  )
}

export default App