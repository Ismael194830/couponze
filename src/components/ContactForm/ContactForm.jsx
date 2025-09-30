// src/components/ContactForm.jsx

import React, { useState } from 'react';
import './ContactForm.css';



function ContactForm() {
    // حالة لتخزين مدخلات النموذج (لجعله يعمل في React)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('بيانات النموذج المرسلة:', formData);
        alert('تم إرسال رسالتك بنجاح! (تم التنفيذ على الكونسول)');
    };

    return (
        <div className="contact-container">
            
            {/* 1. قسم العنوان (يستخدم الفئة highlighted-title للعنون البرتقالي) */}
            <div className="contact-header">
                <h2 className="highlighted-title">اتصل بنا</h2>
            </div>
            
            {/* 2. النموذج الرئيسي */}
            <form className="contact-form" onSubmit={handleSubmit}>
                
                {/* 2.1. حقل الاسم (مقسم إلى First و Last) */}
                <div className="form-group name-group">
                    <label htmlFor="name-label" className="field-label">الإسم</label>
                    <div className="input-row">
                        <div className="input-wrapper">
                            <input 
                                type="text" 
                                name="firstName" 
                                value={formData.firstName} 
                                onChange={handleChange} 
                                required 
                            />
                            <span className="input-hint">First</span>
                        </div>
                        <div className="input-wrapper">
                            <input 
                                type="text" 
                                name="lastName" 
                                value={formData.lastName} 
                                onChange={handleChange} 
                            />
                            <span className="input-hint">Last</span>
                        </div>
                    </div>
                </div>
                
                {/* 2.2. حقل البريد الإلكتروني: تم إزالة الفئة required-field */}
                <div className="form-group">
                    {/* *** هنا تم حذف فئة required-field التي كانت تسبب ظهور النجمة! *** */}
                    <label htmlFor="email" className="field-label">البريد الإلكتروني</label> 
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                
                {/* 2.3. حقل الرسالة */}
                <div className="form-group">
                    <label htmlFor="message" className="field-label">التعليق أو الرسالة</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="6" 
                        value={formData.message} 
                        onChange={handleChange} 
                    />
                </div>
                
                {/* 2.4. زر الإرسال */}
                <div className="submit-group">
                    <button type="submit" className="submit-btn">إرسال</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;