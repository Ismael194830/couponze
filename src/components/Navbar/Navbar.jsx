// src/components/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  // 1. حالة القائمة المنسدلة (كما هي)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. حالة قيمة البحث: لتخزين النص الذي يكتبه المستخدم
  const [searchTerm, setSearchTerm] = useState('');

  // دالة تبديل حالة القائمة (كما هي)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 3. دالة تحديث قيمة البحث عند الكتابة
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 4. دالة تنفيذ عملية البحث (سيتم تطويرها لاحقاً لربطها بـ API)
  const handleSearch = (event) => {
    event.preventDefault(); // منع السلوك الافتراضي للنموذج إذا كان الإدخال داخل نموذج
    if (searchTerm.trim() !== '') {
      console.log('تنفيذ البحث عن:', searchTerm);
      // في المستقبل، سيتم هنا استدعاء دالة البحث عن الكوبونات
      // مثال: fetchCoupons(searchTerm); 
    }
    // يمكن هنا إضافة منطق لتوجيه المستخدم لصفحة نتائج البحث
  };

  return (
    <header className="navbar-container">
      <nav className="navbar-content">
        
        {/* قسم الشعار */}
        <div className="navbar-logo-section">
          <a href="/" className="navbar-logo">
          <img src="/logo.webp" alt="" />
          </a>
        </div>
        
        {/* قسم الروابط والملاحة (المنتصف) */}
        <div className="navbar-links">
          <ul>
            <li><Link to={'/'}>الرئيسية</Link></li>
            <li><Link to={'/Product'}>جميع المتاجر</Link></li>
            <li><Link to={'/ConatctUs'}>اتصل بنا</Link></li>
    
          </ul>
        </div>

        {/* 5. قسم البحث: نربط العناصر بمنطق البحث */}
        {/* نستخدم وسم <form> لمعالجة حدث الإرسال (Submit) بضغط Enter */}
        <form className="navbar-search-section" onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder="البحث" 
                className="search-input" 
                value={searchTerm} // ربط القيمة بالحالة
                onChange={handleSearchChange} // تحديث الحالة عند الكتابة
            />
            <button 
                type="submit" // نوع الزر 'submit' ليقوم بتشغيل دالة handleSearch
                className="search-icon"
                aria-label="بحث"
            >
                🔍
            </button>
        </form>
        
      </nav>
      
      {/* القائمة المنسدلة */}
      
      
    </header>
  );
}

export default Navbar;