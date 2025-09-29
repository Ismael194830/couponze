// src/App.jsx

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Pagas/Home/Home'
import Product from './Pagas/product/product'
import ConatctUs from './Pagas/contactUs/ConatctUs'
import Footer from './components/Footer/Footer'

function App() {
  // هنا سنضع منطق جلب الكوبونات وعرضها
  // حاليًا، سنعرض رسالة بسيطة للتأكيد

  return (
    <>
     <Navbar/>


     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/ConatctUs' element={<ConatctUs />}/>
     </Routes>
      <Footer/>
      
    </>

  )
}

export default App