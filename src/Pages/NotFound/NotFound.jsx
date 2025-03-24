import { NavLink } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

const NotFound = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90svh",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          color="var(--jea-color-secondary)"
          sx={{ fontFamily: "Gilroy-Bold, sans-serif" }}
          gutterBottom
        >
          404
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontFamily: "Gilroy-Bold, sans-serif" }}
          gutterBottom
        >
          Página no encontrada
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ fontFamily: "Gilroy-Bold, sans-serif" }}
          paragraph
        >
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </Typography>
        <Button
          variant="contained"
          component={NavLink}
          to="/"
          sx={{
            backgroundColor: "var(--jea-color-secondary)",
            color: "var(--jea-color-primary)",
            fontFamily: "Gilroy-Bold, sans-serif",
          }}
        >
          ← Volver al inicio
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
