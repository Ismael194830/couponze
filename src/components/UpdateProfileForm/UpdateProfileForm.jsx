import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthenticated, loginSuccess } from '../../redux/authSlice';
import { updateProfile, updatePassword, fetchUserCoupons } from '../../api/updateProfile'; // تم استيراد fetchUserCoupons
import './UpdateProfileForm.css'; // تم استيراد fetchUserCoupons


// --- المكونات الداخلية للنماذج ---

// 1. نموذج تحديث الاسم والبريد الإلكتروني
const UpdateProfileForm = ({ user, dispatch, setMsg }) => {
    const [name, setName] = useState(user.name || '');
    const [email, setEmail] = useState(user.email || '');
    const [currentPassword, setCurrentPassword] = useState(''); // حالة كلمة المرور الحالية
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMsg({ text: 'جاري التحديث...', type: 'info' });

        try {
            const token = localStorage.getItem('authToken');

            const data = await updateProfile(token, {
                name,
                email,
                current_password: currentPassword // الحقل المطلوب الآن
            });

            // تحديث Redux Store ببيانات المستخدم الجديدة
            dispatch(loginSuccess(data.user));

            setMsg({ text: 'تم تحديث الملف الشخصي بنجاح!', type: 'success' });
            setCurrentPassword(''); // مسح كلمة المرور بعد النجاح

        } catch (error) {
            setMsg({
                text: error.message || 'فشل تحديث الملف الشخصي. حاول مرة أخرى.',
                type: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 shadow rounded-lg mb-6  BackColor">
            <h3 className="text-xl font-bold mb-4 text-gray-700 border-b pb-2">تعديل الاسم والبريد الإلكتروني</h3>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">الاسم:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">البريد الإلكتروني:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">كلمة المرور الحالية (للتأكيد):</label>
                <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={` font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
                {isSubmitting ? 'جاري الحفظ...' : 'حفظ التغييرات'}
            </button>
        </form>
    );
};


// 2. نموذج تحديث كلمة المرور
const UpdatePasswordForm = ({ setMsg }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setMsg({ text: 'كلمة المرور الجديدة وتأكيدها غير متطابقين.', type: 'error' });
            return;
        }

        setIsSubmitting(true);
        setMsg({ text: 'جاري تحديث كلمة المرور...', type: 'info' });

        try {
            const token = localStorage.getItem('authToken');
            await updatePassword(token, {
                current_password: currentPassword,
                password: newPassword,
                password_confirmation: confirmPassword
            });

            setMsg({ text: 'تم تحديث كلمة المرور بنجاح.', type: 'success' });

            // مسح الحقول بعد النجاح
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');

        } catch (error) {
            setMsg({
                text: error.message || 'فشل تحديث كلمة المرور. تأكد من كلمة المرور الحالية.',
                type: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-lg  BackColor">
            <h3 className="text-xl font-bold mb-4 text-gray-700 border-b pb-2">تغيير كلمة المرور</h3>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">كلمة المرور الحالية:</label>
                <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">كلمة المرور الجديدة:</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                    required
                    minLength={6}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">تأكيد كلمة المرور الجديدة:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700'}`}
            >
                {isSubmitting ? 'جاري التحديث...' : 'تحديث كلمة المرور'}
            </button>
        </form>
    );
};


// 3. مكون عرض سجل الكوبونات الجديدة
const CouponHistory = ({ setMsg }) => {
    const [coupons, setCoupons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // دالة لنسخ الكود
    const copyToClipboard = (code) => {
        // نستخدم document.execCommand('copy') كحل بديل لضمان العمل في بيئات مختلفة
        const el = document.createElement('textarea');
        el.value = code;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        setMsg({ text: `تم نسخ الكود: ${code}`, type: 'success' });
    };

    useEffect(() => {
        const loadCoupons = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                setIsLoading(false);
                return;
            }
            try {
                const history = await fetchUserCoupons(token);
                setCoupons(history);
            } catch (error) {
                setMsg({
                    text: error.message || 'فشل تحميل سجل الكوبونات.',
                    type: 'error'
                });
                setCoupons([]); // مسح البيانات عند الفشل
            } finally {
                setIsLoading(false);
            }
        };

        loadCoupons();
    }, [setMsg]);

    const formatCouponValue = (coupon) => {
        if (coupon.type === 'fixed') {
            return `${coupon.value} SAR`;
        }
        if (coupon.type === 'percentage') {
            return `${coupon.value}%`;
        }
        return coupon.value;
    };
    
    return (
        <div className="p-4 bg-white shadow rounded-lg mt-6 BackColor">
            <h3 className="text-xl font-bold mb-4 text-gray-700 border-b pb-2">سجل الكوبونات المطلوبة</h3>

            {isLoading && <p className="text-center text-gray-500">جاري تحميل السجل...</p>}

            {!isLoading && coupons.length === 0 && (
                <p className="text-center text-gray-500">لم تقم بطلب أي كوبونات بعد.</p>
            )}

            {!isLoading && coupons.length > 0 && (
                <div className="space-y-4">
                    {coupons.map((request) => (
                        <div key={request.id} className="p-4 border rounded-lg bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm">
                            <div className="flex-grow text-right">
                                <p className="font-semibold text-gray-800 text-lg">{request.coupon.title}</p>
                                <p className="text-sm text-gray-600">المتجر: {request.coupon.merchant.name}</p>
                                <p className="text-sm text-gray-500">تاريخ الطلب: {new Date(request.requested_at).toLocaleDateString('ar-EG')}</p>
                            </div>
                            
                            <div className="mt-3 md:mt-0 md:mr-4 text-center">
                                <div 
                                    className="bg-yellow-100 text-yellow-800 font-extrabold text-xl py-1 px-3 rounded-md border-dashed border-2 border-yellow-500 cursor-pointer transition duration-200 hover:bg-yellow-200"
                                    onClick={() => copyToClipboard(request.coupon.code)}
                                    title="انقر للنسخ"
                                >
                                    {request.coupon.code}
                                </div>
                                <p className="text-xs mt-1 text-gray-500">قيمة الخصم: {formatCouponValue(request.coupon)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


// --- المكون الرئيسي لصفحة الملف الشخصي ---

function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // قراءة حالة المصادقة وبيانات المستخدم
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector(state => state.auth.user);

    const [message, setMessage] = useState(null); // لعرض رسائل النجاح/الخطأ

    // حماية المسار: إعادة التوجيه إذا لم يكن مسجل دخول
    useEffect(() => {
        // نستخدم !isAuthenticated للتأكد من حالة تسجيل الدخول بعد التحقق الأولي
        if (!isAuthenticated) {
            navigate('/'); // التوجيه للصفحة الرئيسية أو لصفحة تسجيل الدخول
        }
    }, [isAuthenticated, navigate]);

    // عرض شاشة التحميل إذا لم يكن المستخدم متاحاً بعد (لحظة التحقق)
    if (!user || !isAuthenticated) {
        // استخدام شرطية isAuthChecked من Redux Store لضمان عدم وميض المحتوى
        return (
            <div className="text-center py-10 text-gray-500">جاري التحقق من حالة المصادقة...</div>
        );
    }

    // دالة لمسح الرسالة بعد فترة
    const setTimedMessage = ({ text, type }) => {
        setMessage({ text, type });
        setTimeout(() => setMessage(null), 5000);
    };

    return (
        // 🌟 إضافة dir="rtl" إلى الحاوية الرئيسية لتحديد الاتجاه 🌟
        <div className="container mx-auto p-4 md:p-8 max-w-2xl" dir="rtl"> 
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800 border-b pb-3">الملف الشخصي</h1>

            {/* عرض رسالة التحديث (نجاح/خطأ) */}
            {message && (
                <div
                    className={`p-3 mb-4 rounded text-right ${message.type === 'success' ? 'bg-green-100 text-green-800' : 
                        message.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}
                >
                    {message.text}
                </div>
            )}

            {/* عرض بيانات المستخدم الحالية */}
            <div className="bg-gray-50 p-4 mb-6 rounded-lg shadow-inner text-right"> 
                <p className="text-lg font-semibold text-gray-700">مرحباً بك، {user.name || 'مستخدم'}</p>
                <p className="text-sm text-gray-500">البريد الحالي: {user.email || 'غير متوفر'}</p>
            </div>

            {/* نموذج تعديل الاسم والبريد */}
            <UpdateProfileForm user={user} dispatch={dispatch} setMsg={setTimedMessage} />

            {/* نموذج تعديل كلمة المرور */}
            <UpdatePasswordForm setMsg={setTimedMessage} />

            {/* قسم سجل الكوبونات الجديد */}
            <CouponHistory setMsg={setTimedMessage} />

        </div>
    );
}

export default Profile;
