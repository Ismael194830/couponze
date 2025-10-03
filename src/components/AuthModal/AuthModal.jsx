import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeAuthModal, loginSuccess } from '../../redux/authSlice';
// استيراد دوال الاتصال بالباك إند
import { loginApiCall, registerApiCall } from '../../api/auth'; 

const AuthModal = () => {
  const dispatch = useDispatch();
  const isAuthModalOpen = useSelector(state => state.auth.isAuthModalOpen);
  const [isLoginView, setIsLoginView] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // التحقق من الحقول 
    if (!email || !password) {
        setError('يجب إدخال البريد الإلكتروني وكلمة المرور.');
        setIsLoading(false);
        return;
    }

    try {
        let responseData;
        
        // 1. استدعاء دالة API المناسبة
        if (isLoginView) {
            responseData = await loginApiCall(email, password);
        } else {
            responseData = await registerApiCall(email, password);
        }

        // 2. معالجة الرد الناجح: تخزين التوكن وتحديث حالة Redux
        
        if (responseData.token) {
            // حفظ التوكن في Local Storage (مهم للمحافظة على حالة المستخدم)
            localStorage.setItem('authToken', responseData.token);
        }
        
        // إرسال بيانات المستخدم المسترجعة من الـ API إلى Redux Store
        dispatch(loginSuccess(responseData.user));
        
        // مسح الحقول وإغلاق النافذة
        setEmail('');
        setPassword('');
        
    } catch (err) {
        // 3. معالجة الفشل (الخطأ يأتي من دالة API أو الشبكة)
        console.error("Authentication failed:", err.message);
        
        let userFriendlyError;

        // 🌟🌟🌟 التعامل مع أخطاء الشبكة هنا 🌟🌟🌟
        // إذا كان الخطأ يدل على فشل الاتصال بالباك إند تمامًا:
        if (err.message && (err.message.includes('Failed to fetch') || err.message.includes('NetworkError'))) {
            userFriendlyError = "تعذر الاتصال بالخادم.";
        } else {
            // إذا كان الخطأ قادماً من دالة API (مثل فشل تسجيل دخول بسبب كلمة مرور خاطئة)
            userFriendlyError = err.message || "حدث خطأ غير متوقع أثناء الاتصال بالخادم.";
        }

        // عرض رسالة الخطأ للمستخدم
        setError(userFriendlyError);
        
    } finally {
        setIsLoading(false);
    }
  };

  const title = isLoginView ? 'تسجيل الدخول' : 'إنشاء حساب جديد';
  const submitText = isLoginView ? 'تسجيل الدخول' : 'إنشاء حساب';
  const toggleText = isLoginView ? 'ليس لديك حساب؟ إنشاء حساب' : 'لديك حساب بالفعل؟ تسجيل الدخول';

  // --- أنماط CSS (بقي الأنماط كما هي) ---
  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    direction: 'rtl'
  };

  const contentStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '400px',
    width: '90%',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    textAlign: 'center'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: isLoading ? '#6c757d' : '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    marginTop: '15px',
    width: '100%',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxSizing: 'border-box'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#333'
  }
  // --- نهاية الأنماط ---

  return (
    <div style={modalStyle}>
      <div style={contentStyle}>
        <button style={closeButtonStyle} onClick={() => dispatch(closeAuthModal())}>
          &times;
        </button>
        
        <h2 style={{ marginBottom: '20px', color: '#333' }}>{title}</h2>
        
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <input 
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
            disabled={isLoading}
          />
          <input 
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
            disabled={isLoading}
          />

          <button type="submit" style={buttonStyle} disabled={isLoading}>
            {isLoading ? 'جاري التحميل...' : submitText}
          </button>
        </form>
        
        <p style={{ marginTop: '20px', fontSize: '14px' }}>
          <button 
            onClick={() => { setIsLoginView(!isLoginView); setError(null); }} 
            style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', padding: 0 }}
            disabled={isLoading}
          >
            {toggleText}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
