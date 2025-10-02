// NotFoundPage.jsx
import React from 'react';

// تأكد من أن مسار الصورة صحيح. يمكنك وضعها في مجلد "public" أو "src/assets".
// مثال: import backgroundImage from './assets/404-bg.jpg';
// إذا كانت الصورة في مجلد public، يمكنك استخدام المسار المطلق /images/404-bg.jpg
const backgroundImage = '/404.png'; // استبدل بمسار صورتك

const NotFoundPage = () => {
  const pageStyle = {
    paddingTop: `0px`,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',        // لتغطية المساحة بالكامل
    backgroundPosition: 'center',   // لتوسيط الصورة
    backgroundRepeat: 'no-repeat',  // لمنع تكرار الصورة
    minHeight: '100vh',             // لتغطية كامل ارتفاع الشاشة
    display: 'flex',                // لترتيب المحتوى في المنتصف
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',                 // لون النص ليتناسب مع الخلفية الداكنة
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',        // لضمان عدم تجاوز الهوامش حجم العنصر
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)'// لإبراز النص,
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: 'orange',
    border: `2px dashed #fff`,
    outline: `2px solid orange`,
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none' // لإزالة خط التسطير من الرابط
  };

  return (
    <div style={pageStyle}>
      <a href="/" style={buttonStyle}>العودة للصفحة الرئيسية</a>
    </div>
  );
};

export default NotFoundPage;