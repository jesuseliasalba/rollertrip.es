import { useEffect, useState } from "react";
import "./Cards.css";

const card = [
  {
    id: 1,
    title: "Murcia Achotour",
    image: "/cards/murcia.webp",
    mobile: "/cards/murcia2.webp",
  },
  {
    id: 2,
    title: "London Calling",
    image: "/cards/london.webp",
    mobile: "/cards/london2.webp",
  },
  {
    id: 3,
    title: "Bilbao Pura Kalea",
    image: "/cards/bilbo.webp",
    mobile: "/cards/bilbo2.webp",
  },
  {
    id: 4,
    title: "Sevilla de Tranquis",
    image: "/cards/sevilla.webp",
    mobile: "/cards/sevilla2.webp",
  },
];

const Cards = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="cards-container">
      {card.map((city) => {
        const imageSrc = isMobile ? city.mobile : city.image;
        return (
          <div key={city.id} className="card">
            <div className="card-inner">
              <img src={imageSrc} alt={city.title} className="card-image" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
