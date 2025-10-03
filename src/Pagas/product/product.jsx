import { Link } from "react-router-dom";
import "./Product.css";

export default function Product() {
  const arr = [
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
    {
      id: 1,
      img: "/random-feature.jpg",
      title: "test test",
      span: "test test test test",
    },
  ];
  return (
    <div className="AllProducte">
      <h2> جميع المتاجر :</h2>
      <div className="AllCards">
        {arr.map((card, index) => (
          <Link to={`/Search/${card.title}`}>
            <div className="storeCard" key={index}>
              <img src={card.img} alt="" />
              <h3>{card.title}</h3>
              <span>{card.span}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
