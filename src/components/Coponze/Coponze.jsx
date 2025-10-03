import './Coponze.css'
import Barcode from 'react-barcode';

export default function Coponze() {

    const nineCharCode = "A12345678"
    return (
        <div className='singleCopone'>
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
                    <button>print</button>
                </div>
            </div>
        </div>
    )
}
