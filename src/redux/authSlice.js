import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // حالة المصادقة: 'authenticated', 'guest'
  status: 'guest', 
  user: null, // لتخزين بيانات المستخدم إذا سجل الدخول
  isAuthModalOpen: false, // للتحكم بظهور النافذة المنبثقة
  // 🌟 جديد: حالة التحميل الأولية. تكون false حتى ننتهي من فحص LocalStorage.
  isAuthChecked: false, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.status = 'authenticated';
      state.user = action.payload; 
      state.isAuthModalOpen = false; 
      state.isAuthChecked = true; // تم التحقق من المصادقة (بنجاح)
    },
    logout: (state) => {
      state.status = 'guest';
      state.user = null;
      state.isAuthChecked = true; // تم التحقق من المصادقة (وخرج)
      // 🌟 جديد: إزالة التوكن من LocalStorage عند الخروج
      localStorage.removeItem('authToken'); 
    },
    // 🌟 جديد: إجراء لتعيين حالة التحقق الأولية (للحالات التي لا يوجد فيها توكن)
    setAuthChecked: (state) => {
        state.isAuthChecked = true;
    },
    // إجراء بسيط لفتح النافذة
    openAuthModal: (state) => {
      state.isAuthModalOpen = true;
    },
    closeAuthModal: (state) => {
      state.isAuthModalOpen = false;
    },
  },
});

export const { loginSuccess, logout, openAuthModal, closeAuthModal, setAuthChecked } = authSlice.actions;

export default authSlice.reducer;

export const selectIsAuthenticated = (state) => state.auth.status === 'authenticated';
export const selectIsAuthChecked = (state) => state.auth.isAuthChecked; // Selector جديد
