import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, setAuthChecked } from '../redux/authSlice';

// 🛑 تم إزالة دالة checkTokenValidity (لا حاجة للاتصال بالباك إند الآن)

export const useInitialAuthCheck = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    const initializeAuth = () => {
      // هذه الدالة ستنفذ مرة واحدة عند تحميل المكون
      
      if (token) {
        // 1. إذا وجد توكن (نعتبره صالحاً مؤقتاً طالما أننا لا نستطيع التحقق من الباك إند)
        console.log("Found token in LocalStorage. Assuming user is authenticated.");
        
        // 2. استعادة حالة تسجيل الدخول باستخدام بيانات مستخدم وهمية
        // 🚨 ملاحظة: بما أننا لا نستطيع جلب البيانات من الخادم، نستخدم بيانات بديلة.
        // يمكنك تعديل هذه البيانات لتشمل أي شيء تحتاج إليه واجهة المستخدم
        const dummyUser = { 
            id: 'local_user', 
            name: 'المستخدم المحلي', 
            // يمكن إضافة أي بيانات تحتاجها الواجهة هنا
        };
        
        dispatch(loginSuccess(dummyUser));

      } else {
        // 3. لا يوجد توكن: الإشارة لانتهاء التحقق (المستخدم ضيف)
        console.log("No token found. User is guest.");
        dispatch(setAuthChecked());
      }
    };
    
    initializeAuth();
    
    // يتم تشغيل هذا التأثير مرة واحدة فقط
  }, [dispatch]); 
};
