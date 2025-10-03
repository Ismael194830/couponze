// src/api/auth.js

// URL الأساسي لنقاط نهاية المصادقة. قم بتعديله ليناسب إعدادات الباك إند لديك.
const BASE_URL = 'http://localhost:8000/api/v1'; 

/**
 * دالة تسجيل دخول المستخدم.
 * @param {string} email - بريد المستخدم الإلكتروني.
 * @param {string} password - كلمة المرور.
 * @returns {Promise<Object>} يحتوي على بيانات المستخدم والتوكن.
 */
export async function loginApiCall(email, password) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  // إذا لم يكن الرد ناجحًا (مثل 401 Unauthorized أو 400 Bad Request)
  if (!response.ok) {
    // حاول قراءة رسالة الخطأ من الباك إند
    const errorData = await response.json();
    throw new Error(errorData.message || 'فشل تسجيل الدخول: بيانات غير صحيحة.');
  }

  // إذا كان الرد ناجحًا (200 OK)
  const data = await response.json();
  // يُفترض أن data تحتوي على { user: {id, name}, token: '...' }
  return data;
}

/**
 * دالة إنشاء حساب مستخدم جديد.
 * @param {string} email - بريد المستخدم الإلكتروني.
 * @param {string} password - كلمة المرور.
 * @returns {Promise<Object>} يحتوي على بيانات المستخدم والتوكن.
 */
export async function registerApiCall(email, password) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'فشل إنشاء الحساب: البريد مستخدم بالفعل.');
  }

  const data = await response.json();
  return data;
}
