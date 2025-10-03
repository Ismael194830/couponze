const API_BASE_URL = 'http://localhost:8000/api/v1'; // تأكد من أن هذا هو رابط الباك إند الصحيح

/**
 * دالة مساعدة لمعالجة استجابة الـ fetch (تساعد في اكتشاف أخطاء HTML بدلاً من JSON)
 * @param {Response} response
 */
const handleResponse = async (response) => {
  // 1. نقوم أولاً بقراءة النص خام (raw text) بدلاً من response.json() لتجنب خطأ '<'
  const responseText = await response.text();

  if (!response.ok) {
    let errorMessage = 'حدث خطأ غير متوقع أثناء الاتصال بالخادم.';

    // 2. محاولة تحليل الاستجابة كـ JSON إذا لم يكن هناك خطأ في الشبكة
    try {
      const result = JSON.parse(responseText);
      errorMessage = result.message || errorMessage; // إذا نجح التحليل، نأخذ رسالة الخادم
    } catch (e) {
      // 3. إذا فشل التحليل: نتحقق مما إذا كان النص هو صفحة HTML
      if (responseText.startsWith('<!DOCTYPE')) {
        errorMessage = 'خطأ داخلي في الخادم (Server Error 500/404). يُرجى التأكد من مسار API.';
      } else if (responseText.length > 0) {
        // قد تكون رسالة خطأ نصية بسيطة (ليست JSON أو HTML)
        errorMessage = responseText;
      }
    }
    
    // رمي الخطأ للتعامل معه في المكون (Profile.jsx)
    throw new Error(errorMessage);
  }

  // 4. إذا كانت الاستجابة ناجحة (OK):
  try {
    // حاول إرجاع JSON إذا كان موجوداً
    return JSON.parse(responseText);
  } catch (e) {
    // إذا لم يكن هناك محتوى JSON في الاستجابة الناجحة (مثلاً 204 No Content)، نرجع كائن فارغ.
    return {}; 
  }
};


/**
 * تحديث الاسم والبريد الإلكتروني للمستخدم
 * @param {string} token - توكن المصادقة
 * @param {object} profileData - يحتوي على name و email و current_password
 */
export const updateProfile = async (token, profileData) => {
  const response = await fetch(`${API_BASE_URL}/profile`, {
    method: 'PUT', // أو 'PUT' حسب الباك إند لديك
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(profileData),
  });

  const result = await handleResponse(response);
  
  // يجب أن يرجع الخادم بيانات المستخدم المحدثة (user object)
  return result;
};

/**
 * تحديث كلمة المرور للمستخدم
 * @param {string} token - توكن المصادقة
 * @param {object} passwordData - يحتوي على current_password, password, password_confirmation
 */
export const updatePassword = async (token, passwordData) => {
  const response = await fetch(`${API_BASE_URL}/profile`, {
    method: 'PUT', // أو 'PUT' حسب الباك إند لديك
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(passwordData),
  });

  await handleResponse(response);
  
  // دالة handleResponse سترمي خطأ إذا فشلت. إذا نجحت، نرجع رسالة نجاح.
  return { message: 'تم تغيير كلمة المرور بنجاح.' };
};

/**
 * جلب سجل الكوبونات التي طلبها المستخدم
 * @param {string} token - توكن المصادقة
 * @returns {Array} قائمة بالكوبونات المطلوبة
 */
export const fetchUserCoupons = async (token) => {
  const response = await fetch(`${API_BASE_URL}/my-coupons`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  const result = await handleResponse(response);
  
  // نرجع فقط البيانات الأساسية (data array)
  return result.data || []; 
};
