import React from "react";
import './CouponCard.css'

export default function CouponCard() {
  return (
    <div className="Continar">
        <div className="img-logo">
            <img className="img" src="/public/cold-coffe.jpg" alt="" />
            <img className="logo" src="/public/beefinallogo-.png.webp" alt="" />
        </div>
        <div className="contant">
                <p>عروض خصومات مذهلة على الفطور والكيك والمزيد</p>
                <button>طباعة الكوبون</button>
                <p>
                ابدأ صباحك بنكهات ولا أشهى مع خصم 15٪ على الفطور والكيك. عروض مغرية
                تستحق التجربة في أجواء ممتعة.
                </p>
                <span className="expaiard">صالح حتى ديسمبر 31, 2025</span>
                <div className="locatin">
                    <span> الوجبات الجاهزة</span>
                    <span>الصالحية, دمشق</span>
                </div>
                <span>التحقق من يناير 12 . 2025</span>
        </div>
    </div>
  );
}
