import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// 🌟 استيرادات Redux والـ Hooks الجديدة 🌟
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, openAuthModal } from '../../redux/authSlice';
import { useLogout } from '../../hooks/useLogout';
import { LuLogIn , LuLogOut } from "react-icons/lu";
import { IoPersonCircleSharp } from "react-icons/io5";

function Navbar() {

  const [activ , setactiv] = useState(1)
  const [isactive , setisactive] = useState(false)
  const [fillter , setfillter] = useState("")

  // 1. 🌟 قراءة حالة المصادقة من Redux Store
  const isAuthenticated = useSelector(selectIsAuthenticated);
  
  // 2. 🌟 استدعاء Hook الـ Dispatch لفتح النافذة المنبثقة
  const dispatch = useDispatch();

  // 3. 🌟 استدعاء Hook تسجيل الخروج
  const handleLogout = useLogout(); 

  // دالة لفتح نافذة المصادقة المنبثقة
  const handleLoginClick = () => {
    dispatch(openAuthModal());
  };

  // Search
  return (
    <header className="navbar-container">
      <nav className="navbar-content">
        <div className="navbar-logo-section">
          <a href="/" className="navbar-logo">
            <img src="/logo.webp" alt="" />
          </a>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to={"/"} onClick={() => setactiv(1)} className={activ == 1 ? 'activ' : ''}>الرئيسية</Link>
            </li>
            <li>
              <Link to={"/Product"} onClick={() => setactiv(2)} className={activ == 2 ? 'activ' : ''}>جميع المتاجر</Link>
            </li>
            <li>
              <Link to={"/ConatctUs"} onClick={() => setactiv(3)} className={activ == 3 ? 'activ' : ''}>اتصل بنا</Link>
            </li>
          </ul>
        </div>

        <div className="SerthandDest">
          <form className="navbar-search-section">
          <input
            type="text"
            placeholder="البحث"
            className="search-input"
            maxLength={15}
            onChange={(e) => setfillter(e.target.value)}
          />
          <Link to={`/Search/${fillter}`}>
          <button type="submit" className="search-icon" aria-label="بحث" > 
            🔍
          </button>
          </Link>
        </form>
        <Link to={'/profile'}>
        <IoPersonCircleSharp />
        </Link>

        {/* 🌟 4. منطق التبديل بين زر الدخول وزر الخروج 🌟 */}
        {isAuthenticated ? (
          // إذا كان مسجل دخول: إظهار زر تسجيل الخروج
          <button 
            className="Login logout-btn" 
            onClick={handleLogout} // 👈 ربط بزر تسجيل الخروج
            title="تسجيل الخروج"
          >
            <LuLogOut />
          </button>
        ) : (
          // إذا كان ضيف: إظهار زر تسجيل الدخول (Login)
          <button 
            className="Login login-btn" 
            onClick={handleLoginClick} // 👈 ربط بزر فتح النافذة المنبثقة
            title="تسجيل الدخول / إنشاء حساب"
          >
            <LuLogIn />
          </button>
        )}
        </div>
      </nav>
      <nav className="mobileNav">
        <div className="navbar-logo-section">
          <a href="/" className="navbar-logo">
            <img src="/logo.webp" alt="" />
          </a>
        </div>
        <button onClick={() => setisactive(!isactive)}>
          icon
        </button>
        <div className={isactive ? "sidebar" : "sidebaroff"}>
          <button onClick={() => setisactive(!isactive)}>
          x
        </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
