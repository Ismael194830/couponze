// src/components/Footer.jsx

import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            
            {/* ------------------- 1. القسم العلوي (البنفسجي الداكن) ------------------- */}
            <div className="footer-main-content">
                
                {/* تم تعديل الحاوية الداخلية لإضافة padding-right: 10px */}
                <div className="footer-content-wrapper main-wrapper">
                    
                    {/* استخدام فليكس بوكس لترتيب عمودين فقط */}
                    <div className="footer-flex-container">
                        
                        {/* العمود 1: متجر مميز (اليمين) */}
                        <div className="footer-col">
                            <h3 className="column-title">متجر مميز</h3>
                            <ul>
                                <li><a href="#link">عنوان</a></li>
                                <li><a href="#link">المتاجر</a></li>
                                <li><a href="#link">عروضات</a></li>
                                <li><a href="#link">الخدمات</a></li>
                            </ul>
                        </div>

                        {/* العمود 2: أقسام مميزة (اليسار) */}
                        <div className="footer-col">
                            <h3 className="column-title">أقسام مميزة</h3>
                            <ul>
                                <li><a href="#link">حول</a></li>
                                <li><a href="#link">صحافة</a></li>
                                <li><a href="#link">وسائط</a></li>
                                <li><a href="#link">قائمة الأعمال</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* النص الإضافي أسفل الأعمدة مباشرة */}
                    
                </div>
            </div>

            {/* ------------------- 2. القسم السفلي (الأسود) ------------------- */}
            <div className="footer-bottom">
                <div className="footer-content-wrapper bottom-wrapper">
                    <p className="copyright-text">
                        © 2025 حقوق الملكية محفوظة لموقع كوبونيز. دليل أكواد الخصم في الجمهورية العربية السورية.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;