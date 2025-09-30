import "./Diteales.css";

export default function Diteales() {
  const arr = [
    {
      img: "cold-coffe.jpg",
      logo: "حبات القهوة",
      title: "مستحضرات تجميل شهيرة في السويداء سوريا",
      discrip:
        "احصلي على حسم 50٪ على مجموعة مختارة من مستحضرات التجميل في السويداء. جمالك يستحق الأفضل بأقل تكلفة.",
    },
    {
      img: "cold-coffe.jpg",
      logo: "حبات القهوة",
      title: "مستحضرات تجميل شهيرة في السويداء سوريا",
      discrip:
        "احصلي على حسم 50٪ على مجموعة مختارة من مستحضرات التجميل في السويداء. جمالك يستحق الأفضل بأقل تكلفة.",
    },
    {
      img: "cold-coffe.jpg",
      logo: "حبات القهوة",
      title: "مستحضرات تجميل شهيرة في السويداء سوريا",
      discrip:
        "احصلي على حسم 50٪ على مجموعة مختارة من مستحضرات التجميل في السويداء. جمالك يستحق الأفضل بأقل تكلفة.",
    },
    {
      img: "cold-coffe.jpg",
      logo: "حبات القهوة",
      title: "مستحضرات تجميل شهيرة في السويداء سوريا",
      discrip:
        "احصلي على حسم 50٪ على مجموعة مختارة من مستحضرات التجميل في السويداء. جمالك يستحق الأفضل بأقل تكلفة.",
    },
    {
      img: "cold-coffe.jpg",
      logo: "حبات القهوة",
      title: "مستحضرات تجميل شهيرة في السويداء سوريا",
      discrip:
        "احصلي على حسم 50٪ على مجموعة مختارة من مستحضرات التجميل في السويداء. جمالك يستحق الأفضل بأقل تكلفة.",
    },
  ];

  return (
    <section className="Diteales">
      <h2 className="Title">كوبونات خصم مميزة لهذا الأسبوع</h2>
      <p className="Discrition">
        اكتشف أفضل العروض والخصومات الحصرية في مكان واحد! تشمل هذه الفئة كوبونات
        مميزة، وفرص توفير استثنائية على مختلف المنتجات والخدمات. تابعها باستمرار
        لتكون أول من يستفيد من أقوى التخفيضات المتوفرة.
      </p>

      <div className="fatherOf">
        <div className="Cards">
          {arr.map((card, index) => (
            <div className="Card" key={index}>
              <img src={`/${card.img}`} alt="" className="" />
              <div class="triangle-divider"></div>
              <h3>{card.logo}</h3>
              <span>{card.title}</span>
              <p>{card.discrip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
