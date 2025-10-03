import CouponToPDF from '../CoponeToPrint/CoponeToPrint';
import './Coponze.css'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Barcode from 'react-barcode';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, openAuthModal } from '../../redux/authSlice';


export default function Coponze() {

    const nineCharCode = "ismail swidan"

    const downloadCouponAsPDF = async () => {

    // 1. تحديد عنصر الكوبون عبر الـ ID
    const input = document.getElementById('coupon-content');
    
    if (!input) {
      console.error("Coupon element not found!");
      return;
    }

    // 2. استخدام html2canvas لالتقاط صورة للمكون
    const canvas = await html2canvas(input, {
      scale: 3, // زيادة الدقة للحصول على جودة عالية (مهم للباركود)
    });

    // 3. تحديد أبعاد الكارد (بالـ mm)
    const cardWidth = 600;  // 80mm تقريبا
    const cardHeight = 300; // 40mm تقريبا

    // 4. إنشاء مستند PDF جديد باستخدام jspdf
    const pdf = new jsPDF({
      orientation: 'landscape', // أفقي
      unit: 'px',
      format: [cardWidth, cardHeight] // تحديد حجم الصفحة ليتناسب مع الكارد
    });
    
    // تحويل الـ canvas إلى صورة بيانات (Data URL)
    const imgData = canvas.toDataURL('image/png');

    // 5. إضافة الصورة إلى ملف PDF (ملء الصفحة بالكامل)
    pdf.addImage(imgData, 'PNG', 0, 0, cardWidth, cardHeight);

    // 6. تحميل الملف
    pdf.save(`coupon_${nineCharCode}.pdf`);
  };
  
  const dispatch = useDispatch();

    const isAuthenticated = useSelector(selectIsAuthenticated); 
  
  const handleCouponRequest = () => {
    
    // التحقق من حالة المصادقة
    if (isAuthenticated) {
      // إذا كان مسجل دخول: تنفيذ عملية تحميل الكوبون (التي سنفترض أنها تعمل)
      console.log("Downloading the coupon for the authenticated user.");
      downloadCouponAsPDF(); 
      
    } else {
      // إذا كان ضيف (الحالة الحالية): 
      // 3. إطلاق الإجراء (Action) الذي يغير حالة isAuthModalOpen إلى true في Redux
      dispatch(openAuthModal()); 
      console.log("User is guest. Opening login modal now."); 
      
      // *** تأكد من ظهور هذه الرسالة في Console المتصفح ***
    }
  };

    return (
        <div className='singleCopone'>
            <CouponToPDF barcodeValue={nineCharCode}/>
            <img src="/cold-coffe.jpg" alt="" />
            <div className='BadyCopon'>
                <div className='Info'>
                    <h3>خصم 30 بالمئة على القهوة المُثلجة من حبات القهوة</h3>
                    <p>دلّل يومك مع خصم 30٪ على القهوة المثلجة من حبات القهوة. نكهات منعشة وطعم غني في كل رشفة.</p>
                    <div className='Points'>
                        <span>حبات القهوة, المقاهي, خصومات مميزة</span>
                        <span> حماه, شارع الجلاء</span>
                        <span>صالح حتى ديسمبر 31, 2025</span>
                    </div>
                </div>
                <div className='Barcode'>
                    <Barcode
                        value={nineCharCode} // هنا تمرر كود الـ 9 محارف
                        format="CODE39"      // Code 39 هو معيار مرن يناسب هذا الطول
                        // يمكنك تجربة "CODE128" أيضًا، لكن Code 39 أبسط للمعالجة
                        width={2}            // عرض كل شريط (اختياري)
                        height={60}         // ارتفاع الباركود (اختياري)
                        displayValue={true}  // عرض النص تحت الباركود (اختياري)
                        margin={20}          // الهوامش (اختياري)
                    // إذا كنت تستخدم محارف أبجدية رقمية (A-Z و 0-9) والرموز الأساسية، فـ Code 39 مناسب.
                    // إذا كنت تحتاج دعمًا أكبر لمجموعة ASCII الكاملة، استخدم "CODE128"
                    />
                    <span>
                        Show this barcode at the checkout counter to avail this offer. You can scan it directly from your phone, or from a Printed copy.
                    </span>
                    <button onClick={() => handleCouponRequest()}>print</button>
                </div>
            </div>
        </div>
    )
}
