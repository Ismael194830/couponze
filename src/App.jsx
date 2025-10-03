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
import AuthModal from './components/AuthModal/AuthModal'
import { useInitialAuthCheck } from './Hooks/useInitialAuthCheck'
import { useSelector } from 'react-redux'
import { selectIsAuthChecked } from './redux/authSlice'
import Profile from './components/UpdateProfileForm/UpdateProfileForm'

function App() {

  useInitialAuthCheck(); 

  // 🌟 هنا يتم الربط: قراءة القيمة من Redux Store 🌟
  const isAuthChecked = useSelector(selectIsAuthChecked);

  // إذا كانت القيمة false، اعرض شاشة التحميل.
  if (!isAuthChecked) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '50px', 
        fontSize: '20px', 
        color: '#007bff', 
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        جاري تحميل بيانات المستخدم... يرجى الانتظار
      </div>
    );
  }

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
      <Route path="/profile" element={<Profile />} />


      <Route path="*" element={<NotFoundPage />} /> 
     </Routes>
      <Footer/>
      <AuthModal />
      
    </>

  )
}

export default App