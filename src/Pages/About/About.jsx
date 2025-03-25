import { Button } from "@mui/material";
import "./About.css";
import { NavLink } from "react-router-dom";
import TimeLine from "../../Components/TimeLine/TimeLine";
const About = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">¿Qué es rollertrip?</h1>
          <div className="hero-text">
            <p>
              ¡Somos la comunidad de patinadores más grande de España, y
              organizamos los eventos sobre ruedas más épicos!
            </p>
            <p>
              Nuestra misión es crear momentos inolvidables para patinadores de
              todos los niveles, promoviendo el patinaje como deporte al aire
              libre, método de movilidad sostenible, pero sobre todo, como una
              forma de vida en la que disfrutar al máximo viajando.
            </p>
            <p>
              Cada uno de nuestros eventos es una oportunidad para descubrir
              nuevos lugares y conectar con cientos de personas que comparten la
              misma pasión por el patinaje. Podrás encontrar rutas urbanas,
              juegos en patines, masterclasses, fiestas, competiciones de
              freeskate… ¡Y mucho más!
            </p>
            <p>
              Más que un grupo, somos una familia sobre ruedas. Si te encanta el
              patinaje y quieres formar parte de algo grande, únete a nosotros y
              prepárate para la mejor experiencia sobre ruedas.
            </p>
            <p>¡Nos vemos en el próximo evento!</p>
          </div>
          <div className="button-group">
            <Button
              variant="contained"
              component={NavLink}
              to="/events"
              className="about-button"
              sx={{
                backgroundColor: "var(--jea-color-secondary)",
                color: "var(--jea-color-primary)",
                fontFamily: "Gilroy-Bold, sans-serif",
              }}
            >
              Ver eventos
            </Button>
            <Button
              variant="contained"
              href={"https://chat.whatsapp.com/KQ1E99gm0hC6bcBzF6HVO0"}
              target="_blank"
              rel="noopener noreferrer"
              className="about-button"
              sx={{
                backgroundColor: "var(--jea-color-secondary)",
                color: "var(--jea-color-primary)",
                fontFamily: "Gilroy-Bold, sans-serif",
              }}
            >
              Únete a la comunidad
            </Button>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="/about/madrid-about-hero.jpg" alt="Evento Madrid 2024" />
        </div>
      </div>
      <TimeLine />
    </div>
  );
};

export default About;
