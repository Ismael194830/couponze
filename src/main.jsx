// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// 🌟 الخطوة 1: استيراد Provider من react-redux 
import { Provider } from 'react-redux';

// 🌟 الخطوة 2: استيراد المتجر (Store) الذي أنشأته
// تأكد من أن المسار صحيح لملف store.js
import { store } from './redux/store'; 


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 🌟 الخطوة 3: تغليف التطبيق بالـ Provider وتمرير المتجر 🌟 */}
    <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);