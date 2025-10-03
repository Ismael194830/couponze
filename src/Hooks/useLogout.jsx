import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice'; // استيراد إجراء الخروج

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook من react-router-dom للتوجيه

  const performLogout = () => {
    // 1. مسح التوكن من التخزين المحلي
    localStorage.removeItem('authToken');
    
    // 2. تحديث Redux Store إلى حالة 'guest'
    dispatch(logout());
    
    // 3. توجيه المستخدم إلى الصفحة الرئيسية (أو صفحة تسجيل الدخول)
    // يمكنك تغيير المسار حسب هيكلية موقعك
    navigate('/'); 

    console.log("User successfully logged out and token removed.");
  };

  // نُعيد الدالة ليتم استدعاؤها عند النقر على زر الخروج
  return performLogout;
};
