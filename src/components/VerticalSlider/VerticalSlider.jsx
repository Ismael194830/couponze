import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./VerticalSlider.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { FaArrowUp   } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";


export default function VerticalSlider() {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const slides = [
    {
      bg: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      text: "ابتكر المستقبل بمنتجاتنا",
      btn: "اكتشف المزيد",
      link: "/about",
    },
    {
      bg: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
      text: "جعل الحياة أسهل بأفكار ذكية",
      btn: "تعرّف علينا",
      link: "/about",
    },
    {
      bg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      text: "نقودك نحو النجاح الرقمي",
      btn: "ابدأ الآن",
      link: "/contact",
    },
  ];

  return (
    <div className="slider-wrapper">
      <Swiper
        direction="vertical"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="slider-container"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <h1 className="slide-text">{slide.text}</h1>
              <button
                onClick={() => navigate(slide.link)}
                className="slide-btn"
              >
                {slide.btn}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار التحكم */}
      <div className="nav-buttons">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <FaArrowUp />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
}
