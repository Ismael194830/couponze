import { Link } from "react-router-dom";
import Title from "../Title/Title";
import "./Diteales.css";

export default function Diteales({title , discreption }) {
  const arr = [
    {
      id : 1,
      img: "cold-coffe.jpg",
      logo: "حبات القهوة",
      title: "مستحضرات تجميل شهيرة في السويداء سوريا",
      discrip:
        "احصلي على حسم 50٪ على مجموعة مختارة من مستحضرات التجميل في السويداء. جمالك يستحق الأفضل بأقل تكلفة.",
    },
    {
      id : 2,
      img: "cold-coffe.jpg",
      logo: "حبات القهوة",
      title: "مستحضرات تجميل شهيرة في السويداء سوريا",
      discrip:
        "احصلي على حسم 50٪ على مجموعة مختارة من مستحضرات التجميل في السويداء. جمالك يستحق الأفضل بأقل تكلفة.",
    },
    {
      id : 3,
      img: "cold-coffe.jpg",
      logo: "حبات القهوة",
      title: "مستحضرات تجميل شهيرة في السويداء سوريا",
      discrip:
        "احصلي على حسم 50٪ على مجموعة مختارة من مستحضرات التجميل في السويداء. جمالك يستحق الأفضل بأقل تكلفة.",
    },
    {
      id : 4,
      img: "cold-coffe.jpg",
      logo: "حبات القهوة",
      title: "مستحضرات تجميل شهيرة في السويداء سوريا",
      discrip:
        "احصلي على حسم 50٪ على مجموعة مختارة من مستحضرات التجميل في السويداء. جمالك يستحق الأفضل بأقل تكلفة.",
    },
    {
      id : 5,
      img: "cold-coffe.jpg",
      logo: "حبات القهوة",
      title: "مستحضرات تجميل شهيرة في السويداء سوريا",
      discrip:
        "احصلي على حسم 50٪ على مجموعة مختارة من مستحضرات التجميل في السويداء. جمالك يستحق الأفضل بأقل تكلفة.",
    },
    {
      id : 6,
      img: "cold-coffe.jpg",
      logo: "حبات القهوة",
      title: "مستحضرات تجميل شهيرة في السويداء سوريا",
      discrip:
        "احصلي على حسم 50٪ على مجموعة مختارة من مستحضرات التجميل في السويداء. جمالك يستحق الأفضل بأقل تكلفة.",
    },
  ];

  return (
    <section className="Diteales">
      <Title 
      title={title}
      discreption={discreption}
      
      />

      <div className="fatherOf">
        <div className="Cards">
          {arr.map((card, index) => (
            <Link to={`/CoponsPrinter/${card.title}`}>
            <div className="Card" key={index}>
              <img src={`/${card.img}`} alt="" className="" />
              <div class="triangle-divider"></div>
              <h3>{card.logo}</h3>
              <span>{card.title}</span>
              <p>{card.discrip}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
