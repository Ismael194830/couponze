import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  const [activ , setactiv] = useState(1)
  const [isactive , setisactive] = useState(true)


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

        <form className="navbar-search-section">
          <input
            type="text"
            placeholder="البحث"
            className="search-input"
            maxLength={15}
          />
          <button type="submit" className="search-icon" aria-label="بحث">
            🔍
          </button>
        </form>
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
