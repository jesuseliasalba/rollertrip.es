import { Box, Button } from "@mui/material";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";

const Home = () => {
  return (
    <div className="home">
      <h1>RollerTrip.es</h1>
      <h2>Turismo en patines</h2>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
        <Button
          variant="contained"
          component={NavLink}
          to="/events"
          sx={{
            backgroundColor: "var(--jea-color-secondary)",
            color: "var(--jea-color-primary)",
            fontFamily: "Gilroy-Bold, sans-serif",
          }}
          className="button-hero"
        >
          Eventos
        </Button>
        <Button
          variant="contained"
          component={NavLink}
          to="/contact"
          sx={{
            backgroundColor: "var(--jea-color-secondary)",
            color: "var(--jea-color-primary)",
            fontFamily: "Gilroy-Bold, sans-serif",
          }}
          className="button-hero"
        >
          Contáctanos
        </Button>
      </Box>
      <Cards />
    </div>
  );
};

export default Home;
